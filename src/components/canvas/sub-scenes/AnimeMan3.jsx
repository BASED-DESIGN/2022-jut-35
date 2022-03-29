import { Suspense } from 'react'
import { useThree } from '@react-three/fiber'

import Canvas from '@components/layout/Canvas'
import Camera from '@components/layout/Camera'
import Man from '@components/canvas/objects/AnimeMan'

const Content = () => {
  const { width, height } = useThree(state => state.size)
  const gl = useThree(state => state.gl)

  return (
    <>
      <Suspense fallback={`loading assets`}>

        <Man
          url='/gltf-anime-2/man-animation.gltf'
          // position={[width < 600 ? width * .31 : width * .38, height*.08, -100]} 
          position={[0, -height*.3, -100]}
          rotation={[-0.6, 0.5, 0]}
          // scale={width < 600 ? 2 : 1}
          scale={window.innerWidth < 600 ? 2 : .7}
          // hover={false}
          // animMoveY={false}
          // lazyIn
        />

      </Suspense>

      <directionalLight position={[-width/2, -height/2, -50]} intensity={1} />
      <ambientLight intensity={0.6} />
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