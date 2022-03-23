import { useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import PresentationControls from '@components/canvas/objects/PresentationControls'
// import Object from '@components/canvas/objects/Object'
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
          url='/gltf/kv2-scenes.gltf'
          position={[-width * .3, -height * .8, -300]} 
          rotation={[-0.03, -0.5, 0]} 
          scale={1.1}
        /> */}
        <Plane 
          url="/kv/kv2_layer_1.png"
          position={[0, 0, -300]}
        />
        <Plane 
          url="/kv/kv2_layer_2.png"
          position={[0, 0, -300]}
        />
        
        <Man
          url='/gltf/kv2-man1.gltf'
          position={[-width * .4, -width * .2, -100]} 
          rotation={[-.2, -0.2, 0]} 
        />
        <Man
          url='/gltf/kv2-man2.gltf'
          position={[-width * .32, -width * .18, -100]}
          rotation={[-.4, -0.5, 0]}
        />
        {/* <Man
          url='/gltf/kv2-man2.gltf'
          position={[width * .38, height/2 - (break1Bound.top + break1Bound.height * .15), -100]} 
          rotation={[-.4, -0.5, 0]}
        /> */}

        {/* <Man
          url='/gltf/kv1-man2.gltf'
          position={[-width * .47, -height * .17, -100]} 
          rotation={[-.2, -0.8, 0]}
          scale={0.8}
        />
        <Man
          url='/gltf/kv1-man3.gltf'
          position={[-width * .35, -height * .22, -100]} 
          rotation={[-.2, -0.8, 0]}
          scale={0.8}
        /> */}

        <Man
          url='/gltf/kv2-man4.gltf'
          position={[width * .32, height * 0.185, -100]} 
          rotation={[-.2, -0.8, 0]} 
          scale={0.9}
        />
        <Man
          url='/gltf/kv2-man3.gltf'
          position={[width * .39, height * 0.21, -100]} 
          rotation={[-.2, -0.8, 0]} 
          scale={0.9}
        />
      </Suspense>

      <directionalLight position={[-width/2, -height/2, -150]} intensity={0.8} />
      <ambientLight />
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