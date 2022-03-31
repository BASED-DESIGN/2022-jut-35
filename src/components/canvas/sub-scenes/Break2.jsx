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
          url='/gltf/kv1-man1.gltf'
          position={[
            width < 640 ? -width * .38 : -width * .27,
            width < 640 ? -height * 0.1 : height * .04,
            -100]} 
          rotation={[-.1, -0.7, -0.1]}
          scale={width < 640 ? 0 : 1} 
          // animMoveY={false}
          // lazyIn
        />
        <Man
          url='/gltf/kv1-manx2.gltf'
          position={[
            width < 640 ? -width * .22 : -width * .02,
            width < 640 ? -height * .18 : -height * .11,
            -100]} 
          rotation={[-.0, -0.6, -0.1]}
          scale={width < 640 ? 2.5 : 1.2}
          // animMoveY={false}
          // lazyIn
        />
        <Man
          url='/gltf/kv1-man3.gltf'
          position={[
            width < 640 ? width * .26 : width * .3,
            width < 640 ? -height * .28 : -height * .28,
            -100]} 
          rotation={[.1, -0.6, 0.1]}
          scale={width < 640 ? 2.3 : 1.1}
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