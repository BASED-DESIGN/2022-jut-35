import { Suspense } from 'react'
import { useThree } from '@react-three/fiber'

import Canvas from '@components/layout/Canvas'
import Camera from '@components/layout/Camera'
import Man from '@components/canvas/objects/AnimeMan'

const Content = props => {
  const { active } = props
  const { width, height } = useThree(state => state.size)

  return (
    <>
      <Suspense fallback={`loading assets`}>
        <Man
          url="/gltf-anime/flying.gltf"
          active={active}
          position={[0, -height*.3, -100]}
          rotation={[-0.6, 0.5, 0]}
          // scale={width < 600 ? 2 : 1}
          // scale={window.innerWidth < 600 ? 2 : .7}
          // animeIndex={1}
        />
      </Suspense>

      <directionalLight position={[-50, 100, 100]} intensity={3} />
      <ambientLight intensity={1} />
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