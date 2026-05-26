import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js'
import './Background.css'

export default function Background() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    
    const isMobile = () => window.innerWidth < 780

    const start = Date.now()
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    const camera = new THREE.PerspectiveCamera(
      70,
      container.clientWidth / container.clientHeight,
      1,
      1000
    )
    camera.position.y = 0 
    camera.position.z = 500
    camera.lookAt(0, 0, 0) 

    // Lights
    const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0)
    pointLight1.position.set(500, 500, 500)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0)
    pointLight2.position.set(-500, -500, -500)
    scene.add(pointLight2)

    // Sphere
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(150, 40, 20), 
      new THREE.MeshPhongMaterial({ flatShading: true })
    )
  
    // 0.40 keeps enough ASCII characters across the diameter so it still looks sort of round
    sphere.scale.setScalar(isMobile() ? 0.40 : 1)
    scene.add(sphere)

    // Renderer
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(container.clientWidth, container.clientHeight)

    // ASCII Effect
    const effect = new AsciiEffect(renderer, '    .:-+*=%@#', { invert: true })
    effect.setSize(container.clientWidth, container.clientHeight)
    effect.domElement.style.color = '#e88a7a'
    effect.domElement.style.backgroundColor = 'transparent'
    container.appendChild(effect.domElement)

  
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const onMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth) * 2 - 1
      
      const rawY = -(event.clientY / window.innerHeight) * 2 + 1
      // Capped at -0.3 because it kept going past Navbar
      targetY = Math.min(rawY, -0.1) 
    }

    window.addEventListener('mousemove', onMouseMove)

    // Animation loop
    const animate = () => {
      const timer = Date.now() - start

      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      if (isMobile()) {
        
        sphere.position.x = 100
        sphere.position.y = 180 + Math.abs(Math.sin(timer * 0.003)) * 20
        sphere.rotation.x = timer * 0.0002
        sphere.rotation.z = timer * 0.0002
      } else {
        
        sphere.position.x = mouseX * 200
        sphere.position.y = 30 + mouseY * 120 + Math.abs(Math.sin(timer * 0.002)) * 100
        sphere.rotation.x = timer * 0.0003 + mouseY * 0.5
        sphere.rotation.z = timer * 0.0002 + mouseX * 0.5
      }

      effect.render(scene, camera)
    }

    renderer.setAnimationLoop(animate)

    
    const onResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      effect.setSize(width, height)
      // Re-apply scale so rotating the device or resizing swaps modes cleanly
      sphere.scale.setScalar(isMobile() ? 0.40 : 1)
    }

    window.addEventListener('resize', onResize)

    // Cleaning up everything
    return () => {
      renderer.setAnimationLoop(null)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      renderer.dispose()
      sphere.geometry.dispose()
      ;(sphere.material as THREE.Material).dispose()
      if (effect.domElement.parentNode === container) {
        container.removeChild(effect.domElement)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="background" aria-hidden="true">
      <div className="background-hotspot" />
    </div>
  )
}










