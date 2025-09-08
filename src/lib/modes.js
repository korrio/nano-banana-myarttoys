// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
// */
// export default {
//   front: {
//     name: 'Front View',
//     emoji: '🎯',
//     prompt: 'Based on this 2D artwork, create a Front view - showing the main face/front details of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate the front view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
//   },

//   back: {
//     name: 'Back View',
//     emoji: '↩️',
//     prompt: 'Based on this 2D artwork, create a Back view - rear perspective of the character of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate the back view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
//   },

//   leftSide: {
//     name: 'Left Side',
//     emoji: '⬅️',
//     prompt: 'Based on this 2D artwork, create a Left side profile view of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate the left-side view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
//   },

//   rightSide: {
//     name: 'Right Side',
//     emoji: '➡️',
//     prompt: 'Based on this 2D artwork, create a Right side profile view of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate the right-side view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
//   },

//   threeQuarterFrontLeft: {
//     name: '3/4 Front-Left',
//     emoji: '↖️',
//     prompt: 'Based on this 2D artwork, create a Front-left three-quarter view of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate the three-quarter-front-left view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
//   },

//   threeQuarterFrontRight: {
//     name: '3/4 Front-Right',
//     emoji: '↗️',
//     prompt: 'Based on this 2D artwork, create a Front-right three-quarter view of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate the three-quarter-front-right view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
//   },

//   threeQuarterBackLeft: {
//     name: '3/4 Back-Left',
//     emoji: '↙️',
//     prompt: 'Based on this 2D artwork, create a Back-left three-quarter view of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate the three-quarter-back-left view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
//   },

//   threeQuarterBackRight: {
//     name: '3/4 Back-Right',
//     emoji: '↘️',
//     prompt: 'Based on this 2D artwork, create a Back-right three-quarter view of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate the three-quarter-back-right view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
//   },

//   topDown: {
//     name: 'Top-Down',
//     emoji: '⬇️',
//     prompt: 'Based on this 2D artwork, create a Top-down aerial view of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate the top-down view as if this character were viewed from above as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
//   }
// }

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 18 Poses for Complete 360° 3D Toy Figure Generation
*/
export default {
  // Front quadrant (0°-90°)
  front_0: {
    name: 'Front (0°)',
    emoji: '⬆️',
    angle: 0,
    prompt: 'Based on this 2D artwork, create a direct Front view (0 degrees) - showing the main face and front details of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate the front view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  front_right_20: {
    name: 'Front-Right (20°)',
    emoji: '↗️',
    angle: 20,
    prompt: 'Based on this 2D artwork, create a Front-Right view (20 degrees) - showing the character slightly turned to show the right side while maintaining front visibility of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 20-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  front_right_40: {
    name: 'Front-Right (40°)',
    emoji: '↗️',
    angle: 40,
    prompt: 'Based on this 2D artwork, create a Front-Right view (40 degrees) - showing more of the right side while still maintaining front features of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 40-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  front_right_60: {
    name: 'Front-Right (60°)',
    emoji: '↗️',
    angle: 60,
    prompt: 'Based on this 2D artwork, create a Front-Right view (60 degrees) - showing a three-quarter view with more right side visible of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 60-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  front_right_80: {
    name: 'Front-Right (80°)',
    emoji: '↗️',
    angle: 80,
    prompt: 'Based on this 2D artwork, create a Front-Right view (80 degrees) - almost a profile view with the right side prominently featured of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 80-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  // Right side quadrant (90°-180°)
  right_90: {
    name: 'Right Side (90°)',
    emoji: '➡️',
    angle: 90,
    prompt: 'Based on this 2D artwork, create a Right side profile view (90 degrees) - showing the complete right side profile of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this right side profile view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  right_back_110: {
    name: 'Right-Back (110°)',
    emoji: '↘️',
    angle: 110,
    prompt: 'Based on this 2D artwork, create a Right-Back view (110 degrees) - showing the character turning from right side toward the back of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 110-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  right_back_130: {
    name: 'Right-Back (130°)',
    emoji: '↘️',
    angle: 130,
    prompt: 'Based on this 2D artwork, create a Right-Back view (130 degrees) - showing more of the back while maintaining some right side visibility of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 130-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  right_back_150: {
    name: 'Right-Back (150°)',
    emoji: '↘️',
    angle: 150,
    prompt: 'Based on this 2D artwork, create a Right-Back view (150 degrees) - showing predominantly the back with slight right side visibility of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 150-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  right_back_170: {
    name: 'Right-Back (170°)',
    emoji: '↘️',
    angle: 170,
    prompt: 'Based on this 2D artwork, create a Right-Back view (170 degrees) - showing almost complete back view with minimal right side of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 170-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  // Back quadrant (180°-270°)
  back_180: {
    name: 'Back (180°)',
    emoji: '⬇️',
    angle: 180,
    prompt: 'Based on this 2D artwork, create a direct Back view (180 degrees) - showing the complete rear perspective of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate the back view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  back_left_200: {
    name: 'Back-Left (200°)',
    emoji: '↙️',
    angle: 200,
    prompt: 'Based on this 2D artwork, create a Back-Left view (200 degrees) - showing the back with slight left side visibility of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 200-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  back_left_220: {
    name: 'Back-Left (220°)',
    emoji: '↙️',
    angle: 220,
    prompt: 'Based on this 2D artwork, create a Back-Left view (220 degrees) - showing more left side while maintaining back visibility of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 220-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  back_left_240: {
    name: 'Back-Left (240°)',
    emoji: '↙️',
    angle: 240,
    prompt: 'Based on this 2D artwork, create a Back-Left view (240 degrees) - showing a three-quarter back view with prominent left side of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 240-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  back_left_260: {
    name: 'Back-Left (260°)',
    emoji: '↙️',
    angle: 260,
    prompt: 'Based on this 2D artwork, create a Back-Left view (260 degrees) - transitioning from back to left side profile of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 260-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  // Left side quadrant (270°-360°)
  left_270: {
    name: 'Left Side (270°)',
    emoji: '⬅️',
    angle: 270,
    prompt: 'Based on this 2D artwork, create a Left side profile view (270 degrees) - showing the complete left side profile of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this left side profile view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  left_front_290: {
    name: 'Left-Front (290°)',
    emoji: '↖️',
    angle: 290,
    prompt: 'Based on this 2D artwork, create a Left-Front view (290 degrees) - showing the character turning from left side toward the front of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 290-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  left_front_320: {
    name: 'Left-Front (320°)',
    emoji: '↖️',
    angle: 320,
    prompt: 'Based on this 2D artwork, create a Left-Front view (320 degrees) - showing a three-quarter view with prominent left side transitioning to front of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 320-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  },

  left_front_340: {
    name: 'Left-Front (340°)',
    emoji: '↖️',
    angle: 340,
    prompt: 'Based on this 2D artwork, create a Left-Front view (340 degrees) - showing more front features while maintaining some left side visibility of the same character/object, maintaining perfect consistency in: - Character design and proportions - Color palette and styling - All visual details and features - Art style and rendering quality. Generate this 340-degree angle view as if this character were turned to show this angle as a 3D toy figure. Ensure the background is clean and the character is centered for 3D modeling reference.'
  }
}