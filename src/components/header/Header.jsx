import React, { useRef, useEffect } from 'react'
import './header.css'
import { motion as m } from 'framer-motion'
import * as THREE from 'three'

const Header = () => {
  const threeRef = useRef(null)

  useEffect(() => {
    const container = threeRef.current

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0xffffff, 0) // transparent background
    container.appendChild(renderer.domElement)

    const textureLoader = new THREE.TextureLoader()
    const earthTexture = textureLoader.load('https://i.imgur.com/eCpD7bM.jpg') // Earth texture    

    const geometry = new THREE.SphereGeometry(1, 64, 64)
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
    })

    const earth = new THREE.Mesh(geometry, material)
    scene.add(earth)

    const pointLight = new THREE.PointLight(0xffffff, 5, 5);
    pointLight.position.set(0.75,0.7,1.5);
    scene.add(pointLight);

    const animate = () => {
      requestAnimationFrame(animate)
      earth.rotation.y += 0.005 // Rotate slowly to mimic Earth's rotation
      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onWindowResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <m.header
      id="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
    >
      <div ref={threeRef} className="three-background globe_container" />

      <div className="container header__container">
        <div className="h_name_container">
          <h1>hello, 你好, apa kabar!</h1>
        </div>
      </div>
    </m.header>
  )
}

export default Header
