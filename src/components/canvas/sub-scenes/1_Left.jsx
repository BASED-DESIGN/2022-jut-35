import { useRef, Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useFrame, useThree } from '@react-three/fiber'
import LightMouseTracker from '@components/canvas/objects/LightMouseTracker'
import { useSpring, config, a } from '@react-spring/three'
import { useGesture } from '@use-gesture/react'

import Plane from '@components/canvas/objects/Item2D'

const Canvas = dynamic(() => import('@components/layout/Canvas'), { ssr: false, })
// const Object = dynamic(() => import('@components/canvas/objects/Item3D'), { ssr: false, })
// const Plane = dynamic(() => import('@components/canvas/objects/Item2D'), { ssr: false, })
const Man = dynamic(() => import('@components/canvas/objects/Man'), { ssr: false, })

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
      // console.log(props)
      // console.log('hovering')
      planeFrontApi.start({
        position: (xy[1] > height * 0.6 && xy[0] < width * 0.6) ? [0, 10, 0] : [0, 0, 0],
      })
      planeBackApi.start({
        position: (xy[1] > height * 0.65 && xy[0] < width * 0.55) ? [0, -10, 0] : [0, 0, 0],
      })
    }
  },
  { target: gl.domElement })

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // if(planeFrontRef.current) planeFrontRef.current.position.z = t
    // if(planeFrontRef.current) console.log(planeFrontRef.current.children[0].geometry.parameters.height)
    // ref.current.rotation.y = Math.sin(t / 2) / 6
    // ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <>
      <Suspense fallback={`loading assets`}>
        {/* <Object
          url='/gltf/kv1-scenes.gltf'
          position={[-width * .3, -height * .9, -300]} 
          rotation={[-0.03, -0.5, 0]} 
          scale={1.1}
        /> */}
        <a.group {...planeFrontSpring}>
          <Plane 
            ref={planeFrontRef}
            url="/kv/kv1_layer_1.png"
            position={[0, 0, -600]}
          />
        </a.group>
        <a.group {...planeBackSpring}>
          <Plane
            ref={planeBackRef}
            url="/kv/kv1_layer_2.png"
            position={[0, 0, -500]}
          />
        </a.group>
        
        <group 
          position={[
            0, 
            planeFrontRef.current && (planeFrontRef.current.children[0].geometry.parameters.height > height) ? 
              (height - planeFrontRef.current.children[0].geometry.parameters.height)/2 : 0,
            0
          ]}
        >
          {/* 上左 */}
          <Man
            url='/gltf/kv1-man1.gltf'
            position={[-width * .38, -height/2 + width * .245, -200]} 
            rotation={[-.1, -0.8, 0]}
            scale={0.8}
          />
          {/* 上中 */}
          <Man
            url='/gltf/kv1-man2.gltf'
            position={[-width * .3, -height/2 + width * .228, -200]} 
            rotation={[-.1, -0.8, 0]}
            scale={0.8}
          />
          {/* 上右 */}
          <Man
            url='/gltf/kv1-man3.gltf'
            position={[-width * .15, -height/2 + width * .17, -200]} 
            rotation={[-.1, -0.8, 0]}
            scale={0.8}
          />
          {/* 下 */}
          <Man
            url='/gltf/kv1-manx2.gltf'
            position={[-width * .26, -height/2 + width * .13, -100]} 
            rotation={[-.15, -0.7, 0]} 
            scale={0.9}
          />
        </group>
      </Suspense>

      <directionalLight position={[-width/2, -height/2, -150]} intensity={0.5} />
      <ambientLight intensity={0.4} />
      <LightMouseTracker intensity={1} />
    </>
  )
}

export default function Scene(props) {
  const {
  } = props
  // const ref = useRef()
  // const { nodes } = useGLTF(url)
  // const { width, height } = useThree(state => state.size)

  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   ref.current.rotation.x = Math.cos(t / 2) / 6
  //   ref.current.rotation.y = Math.sin(t / 2) / 6
  //   ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
  //   // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  // })

  return (   
    <Canvas 
      wrapperClassName="absolute top-0 left-0 w-full h-full z-10"
    >
      <Content />
    </Canvas>
  )
}