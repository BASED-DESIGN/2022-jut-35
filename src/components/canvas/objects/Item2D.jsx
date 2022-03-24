import { useRef, forwardRef, useEffect } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'

const Item2D = forwardRef((props, ref) => {
  const {
    url = `/kv/kv1_layer_1.png`,
    scale=1,
    position,
    rotation
  } = props
  // const rrr = useRef()
  const texture = useLoader(TextureLoader, url)
  texture.encoding = THREE.sRGBEncoding;
  const { width, height } = useThree(state => state.size)
  const planeHeight = width * texture.image.height / texture.image.width

  return (
    <group 
      dispose={null}
      ref={ref}
    >
      <mesh 
        rotation={rotation}
        // position={props.position}
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
    </group>
  )
})

Item2D.displayName = "Item2D"

export default Item2D