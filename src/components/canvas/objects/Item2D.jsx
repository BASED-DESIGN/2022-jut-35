import { useRef } from 'react'
import { useThree, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Item(props) {
  const {
    url = `/kv/kv1_layer_1.png`,
    scale=1
  } = props
  const ref = useRef()
  const texture = useLoader(TextureLoader, url)
  const { width, height } = useThree(state => state.size)
  const planeHeight = width * texture.image.height / texture.image.width

  return (    
    <group 
      ref={ref} 
      // dispose={null}
      rotation={props.rotation}
      position={props.position}
    >
      <mesh 
        position={[0, (planeHeight < height) ? -(height - width * texture.image.height / texture.image.width) / 2 : 0, 0]}
      >
        <planeBufferGeometry 
          attach="geometry" 
          args={[width, planeHeight]}
        />
        <meshBasicMaterial 
          attach="material" 
          map={texture} 
          transparent={true} 
        />
      </mesh>
    </group>
  )
}