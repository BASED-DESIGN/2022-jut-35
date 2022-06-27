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
          url='/gltf/K1-man1.gltf'
          active={active}
          position={[
            width < breakpoint_mb ? -width * .38 : -width * .27,
            width < breakpoint_mb ? -height * 0.1 : height * .04,
            -100]} 
          rotation={[-.1, -0.7, -0.1]}
          scale={width < breakpoint_mb ? 0 : 1}
        />
        <Man
          url='/gltf/K1-man2.gltf'
          active={active}
          position={[
            width < breakpoint_mb ? -width * .22 : -width * .02,
            width < breakpoint_mb ? -height * .18 : -height * .11,
            -100]} 
          rotation={[-.0, -0.6, -0.1]}
          scale={width < breakpoint_mb ? 2.5 : 1.2}
        />
        <Man
          url='/gltf/K1-man3.gltf'
          active={active}
          position={[
            width < breakpoint_mb ? width * .26 : width * .3,
            width < breakpoint_mb ? -height * .28 : -height * .28,
            -100]} 
          rotation={[.3, -0.4, 0.1]}
          scale={width < breakpoint_mb ? 2.3 : 1.1}
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