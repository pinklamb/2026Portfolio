import { useState } from 'react' 
import { P5CanvasInstance, P5Canvas } from '@p5-wrapper/react'
import './Background.css'

export default function Background() {
  const [isReady, setIsReady] = useState(false) 

  const sketch = (p: P5CanvasInstance) => {
    let finger: any
    
    // high density
    const asciiChars = '                                 `.-_:\',^=;><+!rc*z"ls7698543210?!abcdeghijklmnopqrstuVXYZ#@$%'
    
    const gridX = 9  
    const gridY = 4 

    const hand = { 
      x: 0, 
      y: -950,     
      speed: 5.0,
      scale: 2.0  
    }

    p.setup = async () => {
      p.createCanvas(p.windowWidth, p.windowHeight)
      finger = await p.loadImage('/finger.jpg')

      const targetWidth = finger.width
      const aspectRatio = finger.height / finger.width
      const targetHeight = Math.floor(targetWidth * aspectRatio)
      finger.resize(targetWidth, targetHeight)

      p.textFont('Courier New')
      p.textSize(gridY) 
      p.textAlign(p.CENTER, p.CENTER)
      p.noStroke()

      setIsReady(true) 
    }

    p.draw = () => {
      if (!finger) return

      p.background(0) 
      finger.loadPixels()

      // Moves the hand across the screen 
      hand.x += hand.speed

      // Reset to the left side when it fully exits the right edge
      const displayWidth = finger.width * hand.scale
      const displayHeight = finger.height * hand.scale
      if (hand.x > p.width) {
        hand.x = -displayWidth 
      }

      // Calculate center and width bounds for the arm
      const handCenterX = hand.x + (displayWidth / 2)
      const armWidth = displayWidth * 0.65 // Adjusted to look like a wrist/arm width

      // 2. Loop through the fixed screen grid
      for (let y = 0; y < p.height; y += gridY) {
        for (let x = 0; x < p.width; x += gridX) {
          
          let finalChar = ' ' 

          // 3. Check if this specific grid pixel is inside the hand's boundaries
          if (x >= hand.x && x < hand.x + displayWidth && y >= hand.y && y < hand.y + displayHeight) {
            
            // Map screen coordinate back to original image coordinates
            let imgX = Math.floor(p.map(x - hand.x, 0, displayWidth, 0, finger.width - 1))
            let imgY = Math.floor(p.map(y - hand.y, 0, displayHeight, 0, finger.height - 1))

            imgX = p.constrain(imgX, 0, finger.width - 1)
            imgY = p.constrain(imgY, 0, finger.height - 1)

            const pixelIndex = (imgX + imgY * finger.width) * 4
            const r = finger.pixels[pixelIndex + 0]
            const g = finger.pixels[pixelIndex + 1]
            const b = finger.pixels[pixelIndex + 2]
            const avg = (r + g + b) / 3

            const charIndex = Math.floor(p.map(avg, 0, 255, 0, asciiChars.length - 1))
            finalChar = asciiChars[charIndex]
          }
          // 4. NEW: If below the hand image, draw the vertical arm cylinder
          else if (y >= hand.y + displayHeight && x >= handCenterX - (armWidth / 2) && x <= handCenterX + (armWidth / 2)) {
            
            // Generates an organic noise pattern so the arm has texture like the hand
            const noiseVal = p.noise(x * 0.04, y * 0.04)
            // Maps the noise values to ASCII density characters
            const charIndex = Math.floor(p.map(noiseVal, 0, 1, 15, asciiChars.length - 15))
            finalChar = asciiChars[charIndex]
          }

          // 5. Render the character if it isn't an empty space
          if (finalChar && finalChar.trim() !== '') {
            p.fill(233, 150, 122) 
            p.text(finalChar, x, y)
          }
        }
      }
    }
  }

  return (
    <div className={`background ${isReady ? 'is-ready' : ''}`} aria-hidden="true">
      <P5Canvas sketch={sketch} />
    </div>
  )
}






