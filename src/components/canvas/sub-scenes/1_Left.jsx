import { useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import PresentationControls from '@components/canvas/objects/PresentationControls'
import LightMouseTracker from '@components/canvas/objects/LightMouseTracker'

const Canvas = dynamic(() => import('@components/layout/Canvas'), { ssr: false, })
// const Object = dynamic(() => import('@components/canvas/objects/Item3D'), { ssr: false, })
const Plane = dynamic(() => import('@components/canvas/objects/Item2D'), { ssr: false, })
const Man = dynamic(() => import('@components/canvas/objects/Man'), { ssr: false, })

const Content = () => {
  const { width, height } = useThree(state => state.size)

  return (
    <>
      <Suspense fallback={`loading assets`}>
        {/* <Object
          url='/gltf/kv1-scenes.gltf'
          position={[-width * .3, -height * .9, -300]} 
          rotation={[-0.03, -0.5, 0]} 
          scale={1.1}
        /> */}
        <Plane 
          url="/kv/kv1_layer_1.png"
          position={[0, 0, -300]}
        />
        <Plane 
          url="/kv/kv1_layer_2.png"
          position={[0, 0, -300]}
        />
        {/* <Plane 
          url="/kv/kv1_layer_3.png"
          position={[0, 0, -300]}
        /> */}
        
        <Man
          url='/gltf/kv1-man2.gltf'
          position={[-width * .3, -height * .1, -100]} 
          rotation={[-.1, -0.8, 0]}
          scale={0.8}
        />
        <Man
          url='/gltf/kv1-man3.gltf'
          position={[-width * .16, -height * .22, -100]} 
          rotation={[-.1, -0.8, 0]}
          scale={0.8}
        />

        <Man
          url='/gltf/kv1-manx2.gltf'
          position={[-width * .275, -height * .28, -100]} 
          rotation={[-.15, -0.7, 0]} 
          scale={0.9}
        />
        {/* <arrowHelper /> */}
      </Suspense>

      <directionalLight position={[-width/2, -height/2, -150]} intensity={0.5} />
      <ambientLight intensity={0.4} />
      {/* <LightMouseTracker intensity={0.5} /> */}
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