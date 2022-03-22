import React, { useRef, useEffect } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"

// import { isMobile } from "mobile-device-detect"
const isMobile = false

const LightMouseTracker = React.memo(
  ({ intensity = 1, color = 0xffffff }) => {
    // const camera = useThree(state => state.camera)
    // const gl = useThree(state => state.gl)
    const refFollowPointLight = useRef(null)

    useEffect(() => {
      // const container = gl.domElement
      const container = document.querySelector('body')
      const listener = container.addEventListener(
        "mousemove",
        (e) => {
          // Update the mouse variable
          e.preventDefault()

          const x = (e.clientX / container.offsetWidth) * 2 - 1
          const y = -(e.clientY / container.offsetHeight) * 2 + 1

          if (!refFollowPointLight.current?.position) return null

          if (!isMobile) {
            refFollowPointLight.current.position.copy(
              new THREE.Vector3(e.clientX - container.offsetWidth/2, - e.clientY + container.offsetHeight/2, -50)
            )
          }
        },
        false
      )
      return () => {
        container.removeEventListener("mousemove", listener);
      }
    }, [])

    return (
      <pointLight
        ref={refFollowPointLight}
        color={color}
        intensity={isMobile ? 0 : intensity}
      />
    )
  }
)

LightMouseTracker.propTypes = {}

export default LightMouseTracker