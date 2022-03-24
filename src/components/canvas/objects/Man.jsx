import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import PresentationControls from '@components/canvas/objects/PresentationControls'
import { useTransition, a } from '@react-spring/three'

export default function Man(props) {
  const {
    url = `/man-gltf/man1.gltf`,
    scale=1,
    rotation,
    position,
    lazyIn=false
  } = props
  const ref = useRef()
  const { nodes } = useGLTF(url)
  const { width, height } = useThree(state => state.size)
  
  const [active, setActive] = useState(false)

  const transition = useTransition(Object.keys(nodes).filter(key => key!=='Scene'), {
    // from: { scale: [1, 1, 1], rotation: [0, 0, 0] },
    from: { scale: [0, 0, 0], rotation: [0, 0, 0] },
    enter: ({ r=0 }) => ({ scale: [1, 1, 1], rotation: [r * 3, r * 3, r * 3] }),
    // leave: { scale: [0.1, 0.1, 0.1], rotation: [0, 0, 0] },
    config: { mass: 5, tension: 1000, friction: 100 },
    trail: 100
  })

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
      rotation={rotation} // Default rotation
      position={position} // Default position
      polar={[-Math.PI / 3, Math.PI / 3]} // Vertical rotate limits
      azimuth={[-Math.PI / 1.4, Math.PI / 2]} // Horizontal rotate limits
    >      
      <group 
        ref={ref} 
        dispose={null}
      >
        {transition((props, key) => {
          return (
            <a.group {...props} onClick={()=>setActive(true)}>
              <mesh
                key={`man-${key}`}
                scale={scale * width / 360}
                geometry={nodes[key].geometry} 
                position={nodes[key].position} 
                material={nodes[key].material} 
                // {...props}
              />
            </a.group>
          )
        })}
        {/* {Object.keys(nodes).filter(key => key!=='Scene').map(key => 
          <mesh
            key={`man-${key}`}
            scale={scale * width / 360}
            // castShadow 
            // receiveShadow
            geometry={nodes[key].geometry} 
            position={nodes[key].position} 
            material={nodes[key].material} 
          />
        )} */}
        <directionalLight intensity={0.5} position={[50, 300, 50]} />
      </group>
    </PresentationControls>
  )
}