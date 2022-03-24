import { useRef, forwardRef, useEffect } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useTransition, a } from '@react-spring/three'
import * as THREE from 'three'

const Item2D = forwardRef((props, ref) => {
  const {
    url = `/kv/kv1_layer_1.png`,
    scale=1,
    position,
    rotation
  } = props
  const texture = useLoader(TextureLoader, url)
  texture.encoding = THREE.sRGBEncoding;
  const { width, height } = useThree(state => state.size)
  const planeHeight = width * texture.image.height / texture.image.width

  const transition = useTransition(texture, {
    from: { position: [0, -height, 0] },
    enter: { position: [0, 0, 0] },
    // leave: { scale: [0.1, 0.1, 0.1], rotation: [0, 0, 0] },
    config: { mass: 3, tension: 1000, friction: 100 },
    trail: 100
  })

  return (
    <group 
      dispose={null}
      ref={ref}
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