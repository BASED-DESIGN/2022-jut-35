import { Suspense } from 'react'
import { useThree } from '@react-three/fiber'

import Canvas from '@components/layout/Canvas'
import Camera from '@components/layout/Camera'
import Man from '@components/canvas/objects/Man'

const Content = props => {
  const { active } = props
  const { width, height } = useThree(state => state.size)
  const breakpoint_mb = 640

  return (
    <>
      <Suspense fallback={`loading assets`}>
        <Man
          url='/gltf/K2-man1.gltf'
          active={active}
          position={[width < breakpoint_mb ? -width * .25 : -width * .2, -height*.38, -100]} 
          rotation={[-.3, -0.2, 0]} 
          scale={width < breakpoint_mb ? 2 : 1}
        />
        <Man
          url='/gltf/K2-man2.gltf'
          active={active}
          position={[width < breakpoint_mb ? -width * 0.05 : -width * .1, -height*.33, -100]} 
          rotation={[-.5, -0.5, 0]}
          scale={width < breakpoint_mb ? 2 : 1}
        />
        <Man
          url='/gltf/K2-man2.gltf'
          active={active}
          position={[width * .3, -height*.20, -100]} 
          rotation={[-.5, -0.5, 0]}
          scale={width < breakpoint_mb ? 2.4 : 1.2}
        />
      </Suspense>

      <directionalLight position={[-width/2, -height/2, -150]} intensity={0.5} />
      <ambientLight intensity={0.4} />
    </>
  )
}

const ResponsiveCamera = props => {
  const { children } = props

  return (
    <Camera>
      {children}
    </Camera>
  )
}

export default function Scene(props) {
  return (   
    <Canvas name="right" wrapperClassName="absolute top-0 left-0 w-full h-full z-10">
      {(props) => 
        <ResponsiveCamera>
          <Content {...props} />
        </ResponsiveCamera>
      }
    </Canvas>
  )
}