import { Suspense } from 'react'
import { useThree } from '@react-three/fiber'

import Canvas from '@components/layout/Canvas'
import Camera from '@components/layout/Camera'
import Man from '@components/canvas/objects/Man'

const Content = () => {
  const { width, height } = useThree(state => state.size)
  const gl = useThree(state => state.gl)

  return (
    <>
      <Suspense fallback={`loading assets`}>

        <Man
          url='/gltf/kv2-man1.gltf'
          position={[width < 600 ? -width * .25 : -width * .2, -height*.38, -100]} 
          rotation={[-.3, -0.2, 0]} 
          scale={width < 600 ? 2 : 1}
          // animMoveY={false}
          // lazyIn
        />
        <Man
          url='/gltf/kv2-man2.gltf'
          position={[width < 600 ? -width * 0.05 : -width * .1, -height*.33, -100]} 
          rotation={[-.5, -0.5, 0]}
          scale={width < 600 ? 2 : 1}
          // animMoveY={false}
          // lazyIn
        />
        <Man
          url='/gltf/kv2-man2.gltf'
          position={[width * .3, -height*.20, -100]} 
          rotation={[-.5, -0.5, 0]}
          scale={width < 600 ? 2.4 : 1.2}
          // animMoveY={false}
          // lazyIn
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
      <ResponsiveCamera>
        <Content />
      </ResponsiveCamera>
    </Canvas>
  )
}