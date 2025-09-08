/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, {useState, useRef} from 'react'
import c from 'clsx'
import {
  deletePhoto,
  makeGif,
  hideGif,
  generateAllModesFromUpload
} from '../lib/actions'
import useStore from '../lib/store'
import imageData from '../lib/imageData'
import modes from '../lib/modes'

export default function App() {
  const photos = useStore.use.photos()
  const gifInProgress = useStore.use.gifInProgress()
  const gifUrl = useStore.use.gifUrl()
  const [videoActive, setVideoActive] = useState(false)
  const [didInitVideo, setDidInitVideo] = useState(false)
  const [focusedId, setFocusedId] = useState(null)
  const [uploadedImage, setUploadedImage] = useState(null)
  const fileInputRef = useRef(null)

  const handleImageUpload = e => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = e => {
      setUploadedImage(e.target.result)
      setVideoActive(true)
      setDidInitVideo(true)
      generateAllModesFromUpload(e.target.result)
    }
    reader.readAsDataURL(file)
  }

  const downloadGif = () => {
    const a = document.createElement('a')
    a.href = gifUrl
    a.download = 'myarttoys.gif'
    a.click()
  }

  return (
    <main>
      <div
        className="video"
        onClick={() => (gifUrl ? hideGif() : setFocusedId(null))}
      >
        {uploadedImage ? (
          <>
            <img
              src={uploadedImage}
              alt="Uploaded preview"
              className="photoPreview"
            />
            <button
              className="circleBtn closePreview"
              onClick={() => {
                setUploadedImage(null)
                setVideoActive(false)
                setDidInitVideo(false)
                if (fileInputRef.current) {
                  fileInputRef.current.value = ''
                }
              }}
            >
              <span className="icon">close</span>
            </button>
          </>
        ) : null}

        {!videoActive && (
          <div className="startButton">
            <h1>📸 MyArtTOYs</h1>
            <p className="tagline">Turn 2D to 3D-printer-ready!</p>
            <div className="demo-images">
              <img  src="/original.jpeg" alt="Original 2D image" className="demo-image" />
              <span className="arrow"> ➡️ </span>
              <img  src="/3d-generated.gif" alt="Generated 3D views" className="demo-image" />
            </div>
            <div className="start-options">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="button"
              >
                <span className="icon">upload</span> Upload Photo
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{display: 'none'}}
              accept="image/*"
            />
          </div>
        )}

        {(focusedId || gifUrl) && (
          <div className="focusedPhoto" onClick={e => e.stopPropagation()}>
            <button
              className="circleBtn"
              onClick={() => (gifUrl ? hideGif() : setFocusedId(null))}
            >
              <span className="icon">close</span>
            </button>
            <img
              src={gifUrl || imageData.outputs[focusedId]}
              alt="photo"
              draggable={false}
            />
            {gifUrl && (
              <button className="button downloadButton" onClick={downloadGif}>
                Download
              </button>
            )}
          </div>
        )}
      </div>

      <div className="results">
        <ul>
          {photos.length
            ? photos.map(({id, mode, isBusy}) => (
                <li className={c({isBusy})} key={id}>
                  <button
                    className="circleBtn deleteBtn"
                    onClick={() => {
                      deletePhoto(id)
                      if (focusedId === id) {
                        setFocusedId(null)
                      }
                    }}
                  >
                    <span className="icon">delete</span>
                  </button>
                  <button
                    className="photo"
                    onClick={() => {
                      if (!isBusy) {
                        setFocusedId(id)
                        hideGif()
                      }
                    }}
                  >
                    <img
                      src={
                        isBusy ? imageData.inputs[id] : imageData.outputs[id]
                      }
                      draggable={false}
                    />
                    <p className="emoji">{modes[mode].emoji}</p>
                  </button>
                </li>
              ))
            : videoActive && (
                <li className="empty" key="empty">
                  <p>🤖</p>
                  Generating views...
                </li>
              )}
        </ul>
        {photos.filter(p => !p.isBusy).length > 1 && (
          <button
            className="button makeGif"
            onClick={makeGif}
            disabled={gifInProgress}
          >
            {gifInProgress ? 'One sec…' : 'Make GIF!'}
          </button>
        )}
      </div>
    </main>
  )
}
