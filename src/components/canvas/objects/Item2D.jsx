import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useTransition, a, config, easings } from '@react-spring/three'
import * as THREE from 'three'

const Item2D = forwardRef((props, ref) => {
  const {
    url = `/kv/kv1_layer_1.png`,
    scale=1,
    position,
    rotation,
    delay=0,
    active=false
  } = props
  const texture = useLoader(TextureLoader, url)
  texture.encoding = THREE.sRGBEncoding
  const { width, height } = useThree(state => state.size)
  const planeHeight = width * texture.image.height / texture.image.width

  const [start, setStart] = useState(false)

  useEffect(() => {
    if(active) setTimeout(() => setStart(true), delay)
  }, [active])

  const transition = useTransition(start && texture, {
    from: { position: [0, -height/4, 0] },
    enter: { position: [0, 0, 0] },
    // leave: { scale: [0.1, 0.1, 0.1], rotation: [0, 0, 0] },
    config: {
      ...config.gentle,
      duration: 800,
      easing: easings.easeInOutExpo
    },
    // trail: 100
  })

  useImperativeHandle(ref, () => ({
    getPlaneSize() {
      return ({
        width,
        height: planeHeight
      })
    }
  }))

  return (
    <group 
      dispose={null}
      // ref={wrapperRef}
    >
      {transition((props, key) => {
        return key && (
          <a.group {...props}>
            <mesh 
              rotation={rotation}
              position={[
                position[0], 
                position[1] + (planeHeight < height) ? -(height - width * texture.image.height / texture.image.width) / 2 : 0, 
                position[2]
              ]}
            >
              <planeBufferGeometry 
                attach="geometry" 
                args={[width, planeHeight]}
              />
              <meshBasicMaterial 
                attach="material" 
                map={texture} 
                transparent={true}
                dithering
              />
            </mesh>
          </a.group>
        )
      })}
    </group>
  )
})

Item2D.displayName = "Item2D"

export default Item2D