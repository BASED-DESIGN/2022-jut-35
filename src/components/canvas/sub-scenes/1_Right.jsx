import { useRef, Suspense } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import LightMouseTracker from '@components/canvas/objects/LightMouseTracker'
import { useSpring, config, a } from '@react-spring/three'
import { useGesture } from '@use-gesture/react'

import Canvas from '@components/layout/Canvas'
import Plane from '@components/canvas/objects/Item2D'
import Man from '@components/canvas/objects/Man'

const Content = () => {
  const { width, height } = useThree(state => state.size)
  const gl = useThree(state => state.gl)
  const planeFrontRef = useRef(null)
  const planeBackRef = useRef(null)

  const planeConfig = {
    ...config, duration: 1000
  }

  const [planeFrontSpring, planeFrontApi] = useSpring(() => ({ position: [0, 0, 0], config: planeConfig }))
  const [planeBackSpring, planeBackApi] = useSpring(() => ({ position: [0, 0, 0], config: planeConfig }))
  const bind = useGesture({
    onMove: ({ xy, ...props }) => {
      // planeFrontApi.start({
      //   position: (xy[1] > height * 0.6 && xy[0] < width * 0.6) ? [0, 10, 0] : [0, 0, 0],
      // })
      planeBackApi.start({
        position: (xy[1] > height * 0.65 && xy[0] < width * 0.55) ? [0, -20, 0] : [0, 0, 0],
      })
    }
  },
  { target: gl.domElement })

  return (
    <>
      <Suspense fallback={`loading assets`}>
        {/* <Object
          url='/gltf/kv2-scenes.gltf'
          position={[-width * .3, -height * .8, -300]} 
          rotation={[-0.03, -0.5, 0]} 
          scale={1.1}
        /> */}


        {/* Base */}
        <a.group {...planeFrontSpring}>
          <Plane 
            ref={planeFrontRef}
            url="/kv/kv2_layer_1s.png"
            position={[0, 0, -300]}
          />
        </a.group>
        <a.group {...planeBackSpring}>
          <Plane 
            ref={planeBackRef}
            url="/kv/kv2_layer_2s.png"
            position={[0, 0, -300]}
          />
        </a.group>


        {/* Mans */}
        <group 
          position={[
            0, 
            (planeFrontRef.current 
              && (planeFrontRef.current.children[0].children[0].geometry.parameters.height > height)) ? 
              (height - planeFrontRef.current.children[0].children[0].geometry.parameters.height)/2 : 0,
            0
          ]}
        >
          {/* 下左 */}
          <Man
            url='/gltf/kv2-man1.gltf'
            position={[-width * .31, -height/2 + width * .23, -100]} 
            rotation={[-.2, -0.2, 0]} 
          />
          {/* 下右 */}
          <Man
            url='/gltf/kv2-man2.gltf'
            position={[-width * .2, -height/2 + width * .25, -100]}
            rotation={[-.4, -0.6, .2]}
          />
          {/* 上左 */}
          <Man
            url='/gltf/kv2-man4.gltf'
            position={[width * .08, -height/2 + width * 0.44, -500]} 
            rotation={[-.2, -0.8, 0]} 
            scale={0.9}
          />
          {/* 上右 */}
          <Man
            url='/gltf/kv2-man3.gltf'
            position={[width * .16, -height/2 + width * 0.46, -500]} 
            rotation={[-.1, -.95, 0.4]} 
            scale={0.95}
          />
        </group>
      </Suspense>

      <directionalLight position={[-width/2, -height/2, -150]} intensity={0.5} />
      <ambientLight intensity={0.4} />
      {/* <LightMouseTracker intensity={0.5} /> */}
    </>
  )
}

export default function Scene(props) {
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   ref.current.rotation.x = Math.cos(t / 2) / 6
  //   ref.current.rotation.y = Math.sin(t / 2) / 6
  //   ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
  //   // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  // })

  return (   
    <Canvas wrapperClassName="absolute top-0 left-0 w-full h-full z-10">
      <Content />
    </Canvas>
  )
}