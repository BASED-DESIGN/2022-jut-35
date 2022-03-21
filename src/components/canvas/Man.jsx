import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import PresentationControls from '@components/canvas/PresentationControls'

export default function Wrapper(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF(`/man-gltf/man1.gltf`)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.cos(t / 2) / 6
    ref.current.rotation.y = Math.sin(t / 2) / 6
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

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
        <mesh 
          scale={4}
          // castShadow 
          // receiveShadow
          geometry={nodes.man1.geometry} 
          position={nodes.man1.position} 
          material={nodes.man1.material} 
        />
      </group>
      
    </PresentationControls>
  )
}