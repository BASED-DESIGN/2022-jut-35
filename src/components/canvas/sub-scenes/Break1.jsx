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
          position={[
            width < 767 ? -width * .2 : -width * .35,
            width < 767 ? -height * .28 : -height * .35,
            -100
          ]} 
          rotation={[-.2, -0.2, 0]}
          scale={width < 767 ? 2.3 : 1.15}
          // animMoveY={false}
          // lazyIn
        />
        <Man
          url='/gltf/kv2-man2.gltf'
          position={[
            width < 767 ? -width * .4 : -width * .15,
            -height * .26,
            -100
          ]} 
          rotation={[-.4, -0.6, 0.2]}
          scale={width < 767 ? 0 : 1.15}
          // animMoveY={false}
          // lazyIn
        />
        <Man
          url='/gltf/kv1-man2.gltf'
          position={[
            width < 767 ? width * .31 : width * .38,
            width < 767 ? -height * .15 : -height * 0.01,
            -100
          ]} 
          rotation={[-.0, -0.4, 0.2]}
          scale={width < 767 ? 2.5 : 1}
          // animMoveY={false}
          // lazyIn
        />

      </Suspense>

      <directionalLight position={[-width/2, -height/2, -150]} intensity={0.5} />
      <ambientLight intensity={0.8} />
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