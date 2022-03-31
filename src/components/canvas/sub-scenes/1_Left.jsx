import { useRef, useState, useEffect, Suspense } from 'react'
import { useThree } from '@react-three/fiber'
import LightMouseTracker from '@components/canvas/objects/LightMouseTracker'
import { useSpring, config, a, useChain } from '@react-spring/three'
import { useGesture } from '@use-gesture/react'

import Canvas from '@components/layout/Canvas'
import Camera from '@components/layout/Camera'
import Plane from '@components/canvas/objects/Item2D'
import Man from '@components/canvas/objects/Man'

const Content = () => {
  const { width, height } = useThree(state => state.size)
  const gl = useThree(state => state.gl)
  const planeFrontRef = useRef(null)
  const planeBackRef = useRef(null)
  const planeConfig = {
    ...config.gentle, duration: 1000
  }
  const [mansOffsetY, setMansOffsetY] = useState(0)

  const [planeFrontSpring, planeFrontApi] = useSpring(() => ({ position: [0, 0, 0], config: planeConfig }))
  const [planeBackSpring, planeBackApi] = useSpring(() => ({ position: [0, 0, 0], config: planeConfig }))
  const bind = useGesture({
    onMove: ({ xy, ...props }) => {
      planeFrontApi.start({
        position: (xy[1] > height * 0.6 && xy[0] < width * 0.6) ? [0, 10, 0] : [0, 0, 0],
      })
      planeBackApi.start({
        position: (xy[1] > height * 0.65 && xy[0] < width * 0.55) ? [0, -10, 0] : [0, 0, 0],
      })
    }
  },
  { target: gl.domElement })

  useEffect(() => {
    setMansOffsetY(
      (planeFrontRef.current && (planeFrontRef.current.children[0].children[0].geometry.parameters.height > height)) ? 
      (height - planeFrontRef.current.children[0].children[0].geometry.parameters.height)/2 : 
      0
    )
  }, [width, height])

  return (
    <>
      <Suspense fallback={`loading assets`}>
        {/* Base */}
        <a.group {...planeFrontSpring}>
          <Plane 
            ref={planeFrontRef}
            url="/kv/kv1_layer_1s.png"
            position={[0, 0, -600]}
            delay={600}
            // enterConfig={{ delay: 300 }}
          />
        </a.group>
        <a.group {...planeBackSpring}>
          <Plane
            ref={planeBackRef}
            url="/kv/kv1_layer_2s.png"
            position={[0, 0, -500]}
            // enterConfig={{ duration: 600 }}
          />
        </a.group>
        

        {/* Mans */}
        <group 
          position={[0, mansOffsetY, 0]}
        >
          {/* 上左 */}
          <Man
            url='/gltf/kv1-man1.gltf'
            position={[-width * .38, -height/2 + width * .25, -200]} 
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
            position={[-width * .32, -height/2 + width * .12, -100]} 
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

const ResponsiveCamera = props => {
  const { children } = props
  const { width, height } = useThree(state => state.size)
  
  return (
    <Camera
      left={width<600 ? -width * 0.45 : - width / 2}
      right={width<600 ? -width * 0.05 : width / 2}
      top={width<600 ? -height * .1 : height / 2}
      bottom={width<600 ? -height * .5 : - height / 2}
    >
      {children}
    </Camera>
  )
}

export default function Scene(props) {
  return (   
    <Canvas name="left" wrapperClassName="absolute top-0 left-0 w-full h-full z-10">
      <ResponsiveCamera>
        <Content />
      </ResponsiveCamera>
    </Canvas>
  )
}