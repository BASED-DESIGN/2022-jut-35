import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import PresentationControls from '@components/canvas/objects/PresentationControls'

export default function Man(props) {
  const {
    url = `/man-gltf/man1.gltf`,
    scale=1
  } = props
  const ref = useRef()
  const { nodes } = useGLTF(url)
  const { width, height } = useThree(state => state.size)

  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   ref.current.rotation.x = Math.cos(t / 2) / 6
  //   ref.current.rotation.y = Math.sin(t / 2) / 6
  //   ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
  //   // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  // })

  return (
    <PresentationControls
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={props.rotation} // Default rotation
      position={props.position} // Default position
      polar={[-Math.PI / 3, Math.PI / 3]} // Vertical rotate limits
      azimuth={[-Math.PI / 1.4, Math.PI / 2]} // Horizontal rotate limits
    >      
      <group 
        ref={ref} 
        dispose={null}
      >
        {Object.keys(nodes).filter(key => key!=='Scene').map(key => 
          <mesh
            key={`man-${key}`}
            scale={scale * width / 360}
            // castShadow 
            // receiveShadow
            geometry={nodes[key].geometry} 
            position={nodes[key].position} 
            material={nodes[key].material} 
          />
        )}
      </group>
    </PresentationControls>
  )
}