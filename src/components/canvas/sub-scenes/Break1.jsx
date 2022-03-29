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
          position={[width < 600 ? -width*.38 : -width*.4, -height*.2, -100]} 
          rotation={[-.2, -0.2, 0]}
          scale={width < 600 ? 2 : 1}
          // animMoveY={false}
          // lazyIn
        />
        <Man
          url='/gltf/kv2-man2.gltf'
          position={[width < 600 ? -width * .2 : -width * .3, -height*.13, -100]} 
          rotation={[-.4, -0.6, 0.2]}
          scale={width < 600 ? 2 : 1}
          // animMoveY={false}
          // lazyIn
        />
        <Man
          url='/gltf/kv2-man2.gltf'
          position={[width < 600 ? width * .31 : width * .38, height*.08, -100]} 
          rotation={[-.4, -0.5, 0.2]}
          scale={width < 600 ? 2 : 1}
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