/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// import {GIFEncoder, quantize, applyPalette} from 'gifenc'
import {GIFEncoder, quantize, applyPalette} from 'https://unpkg.com/gifenc'
import useStore from './store'
import imageData from './imageData'
import gen from './llm'
import modes from './modes'

const get = useStore.getState
const set = useStore.setState
const gifSize = 512
const model = 'gemini-2.5-flash-image-preview'

export const init = () => {
  if (get().didInit) {
    return
  }

  set(state => {
    state.didInit = true
  })
}

export const generateAllModesFromUpload = async b64 => {
  // Clear previous results
  const oldPhotos = get().photos
  for (const photo of oldPhotos) {
    delete imageData.inputs[photo.id]
    delete imageData.outputs[photo.id]
  }
  set(state => {
    state.photos = []
    state.gifUrl = null
  })

  const newPhotos = []

  // Create all placeholders first
  for (const modeKey of Object.keys(modes)) {
    const id = crypto.randomUUID()
    imageData.inputs[id] = b64
    newPhotos.push({id, mode: modeKey, isBusy: true})
  }

  set(state => {
    state.photos = newPhotos
  })

  // Start generations
  const generationPromises = newPhotos.map(async photo => {
    const {id, mode} = photo
    const prompt = modes[mode].prompt

    try {
      const result = await gen({
        model,
        prompt,
        inputFile: b64
      })

      if (result) {
        imageData.outputs[id] = result
        set(state => {
          const photoIndex = state.photos.findIndex(p => p.id === id)
          if (photoIndex > -1) {
            state.photos[photoIndex].isBusy = false
          }
        })
      } else {
        // Handle generation failure by removing the photo
        delete imageData.inputs[id]
        set(state => {
          state.photos = state.photos.filter(p => p.id !== id)
        })
      }
    } catch (error) {
      console.error(`Failed to generate for mode ${mode}:`, error)
      // Also remove on error
      delete imageData.inputs[id]
      set(state => {
        state.photos = state.photos.filter(p => p.id !== id)
      })
    }
  })

  Promise.allSettled(generationPromises)
}

export const deletePhoto = id => {
  set(state => {
    state.photos = state.photos.filter(photo => photo.id !== id)
  })

  delete imageData.inputs[id]
  delete imageData.outputs[id]
}

const processImageToCanvas = async (base64Data, size) => {
  const img = new Image()
  await new Promise((resolve, reject) => {
    img.onload = resolve
    img.onerror = reject
    img.src = base64Data
  })

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = size
  canvas.height = size

  const imgAspect = img.width / img.height
  const canvasAspect = 1

  let drawWidth
  let drawHeight
  let drawX
  let drawY

  if (imgAspect > canvasAspect) {
    drawHeight = size
    drawWidth = drawHeight * imgAspect
    drawX = (size - drawWidth) / 2
    drawY = 0
  } else {
    drawWidth = size
    drawHeight = drawWidth / imgAspect
    drawX = 0
    drawY = (size - drawHeight) / 2
  }

  ctx.clearRect(0, 0, size, size)
  ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight)

  return ctx.getImageData(0, 0, size, size)
}

const addFrameToGif = (gif, imageData, size, delay) => {
  const palette = quantize(imageData.data, 256)
  const indexed = applyPalette(imageData.data, palette)

  gif.writeFrame(indexed, size, size, {
    palette,
    delay
  })
}

export const makeGif = async () => {
  const {photos} = get()

  set(state => {
    state.gifInProgress = true
  })

  try {
    const gif = new GIFEncoder()
    const readyPhotos = photos
      .filter(photo => !photo.isBusy)
      .sort((a, b) => modes[a.mode].angle - modes[b.mode].angle)

    for (const photo of readyPhotos) {
      const outputImageData = await processImageToCanvas(
        imageData.outputs[photo.id],
        gifSize
      )
      addFrameToGif(gif, outputImageData, gifSize, 400)
    }

    gif.finish()

    const gifUrl = URL.createObjectURL(
      new Blob([gif.buffer], {type: 'image/gif'})
    )

    set(state => {
      state.gifUrl = gifUrl
    })
  } catch (error) {
    console.error('Error creating GIF:', error)
    return null
  } finally {
    set(state => {
      state.gifInProgress = false
    })
  }
}

export const hideGif = () =>
  set(state => {
    state.gifUrl = null
  })

init()
