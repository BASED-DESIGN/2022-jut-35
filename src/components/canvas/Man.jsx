import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows, Html } from '@react-three/drei'
import PresentationControls from '@components/canvas/PresentationControls'
// import useStore from '@helpers/store'

export default function Wrapper(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF(`/man-gltf/man1.gltf`)
  console.log(nodes)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.cos(t / 2) / 6
    ref.current.rotation.y = Math.sin(t / 2) / 6
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })
  return (
    <PresentationControls
      // global
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={[0, -0.8, 0]} // Default rotation
      polar={[-Math.PI / 3, Math.PI / 3]} // Vertical rotate limits
      azimuth={[-Math.PI / 1.4, Math.PI / 2]} // Horizontal rotate limits
    >      
      <group 
        ref={ref} 
        dispose={null}
      >
        {/* <mesh geometry={nodes.man1.geometry} material={materials.glass}>
          <Html scale={100} rotation={[Math.PI / 2, 0, 0]} position={[180, -350, 50]} transform occlude>
            <div className="annotation">
              6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
            </div>
          </Html>
        </mesh> */}
        <mesh 
          scale={4}
          // castShadow 
          // receiveShadow
          geometry={nodes.man1.geometry} 
          position={nodes.man1.position} 
          // position={[30, 0, 0]}
          material={nodes.man1.material} 
          // rotation={nodes.man1.rotation} 
        >
          {/* <Html scale={10} rotation={[0, 0.8, 0]} position={[0, 0, 0]} transform occlude>
            <div className="bg-slate-100 px-2 leading-5 rounded-md text-xs">
              hi
            </div>
          </Html> */}
        </mesh>
      </group>
      
    </PresentationControls>
  )
}