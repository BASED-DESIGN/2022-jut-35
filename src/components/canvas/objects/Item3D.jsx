import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import PresentationControls from '@components/canvas/objects/PresentationControls'

export default function Item(props) {
  const {
    url = `/gltf/man1.gltf`,
    scale=1
  } = props
  const ref = useRef()
  const { nodes } = useGLTF(url)
  const { width, height } = useThree(state => state.size)

  return (    
    <group 
      ref={ref} 
      dispose={null}
      rotation={props.rotation}
      position={props.position}
    >
      {Object.keys(nodes).filter(key => key!=='Scene').map(key => 
        <mesh
          key={`item-${key}`}
          // scale={1}
          scale={scale * width / 500}
          // castShadow 
          // receiveShadow
          geometry={nodes[key].geometry} 
          position={nodes[key].position} 
          material={nodes[key].material} 
        />
      )}
    </group>
  )
}