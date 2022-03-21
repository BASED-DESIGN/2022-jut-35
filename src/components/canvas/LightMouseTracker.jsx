import React, { useRef, useEffect } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useDrag, useGesture, useHover, useWheel } from '@use-gesture/react'

// import { isMobile } from "mobile-device-detect"
const isMobile = false

const LightMouseTracker = React.memo(
  ({ intensity = 1, color = 0xffffff }) => {
    const camera = useThree(state => state.camera)
    const gl = useThree(state => state.gl)
    const refFollowPointLight = useRef(null)

    useEffect(() => {
      const container = gl.domElement;
      const listener = container.addEventListener(
        "mousemove",
        (event) => {
          // Update the mouse variable
          event.preventDefault()

          const x = (event.clientX / container.offsetWidth) * 2 - 1;
          const y = -(event.clientY / container.offsetHeight) * 2 + 1;

          if (!refFollowPointLight.current?.position) return null;

          // Make the sphere follow the mouse
          var vector = new THREE.Vector3(x, y, 0.5);
          vector.unproject(camera);
          var dir = vector.sub(camera.position).normalize();
          var distance = -camera.position.z / dir.z;
          var pos = camera.position.clone().add(dir.multiplyScalar(distance));
          //mouseMesh.position.copy(pos);

          if (!isMobile) {
            refFollowPointLight.current.position.copy(
              new THREE.Vector3(x * 20, 1, y * -20)
            );
          }
        },
        false
      );
      return () => {
        container.removeEventListener("mousemove", listener);
      };
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