import { useRef, Suspense, useState, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { useSpring, config, a } from '@react-spring/three'
import { useGesture } from '@use-gesture/react'

import Canvas from '@components/layout/Canvas'
import Camera from '@components/layout/Camera'
import Plane from '@components/canvas/objects/Item2D'
import Man from '@components/canvas/objects/Man'

const Content = props => {
  const { active } = props
  const { width, height } = useThree(state => state.size)
  const gl = useThree(state => state.gl)
  const planeFrontRef = useRef(null)
  const planeBackRef = useRef(null)
  const planeConfig = {
    ...config, duration: 1000
  }
  const [mansOffsetY, setMansOffsetY] = useState(0)

  const [planeFrontSpring, planeFrontApi] = useSpring(() => ({ position: [0, 0, 0], config: planeConfig }))
  const [planeBackSpring, planeBackApi] = useSpring(() => ({ position: [0, 0, 0], config: planeConfig }))
  const bind = useGesture({
    onMove: ({ xy, ...props }) => {
      planeBackApi.start({
        position: (xy[1] > height * 0.65 && xy[0] < width * 0.55) ? [0, -20, 0] : [0, 0, 0],
      })
    }
  },
  { target: gl.domElement })

  useEffect(() => {
    if(planeFrontRef.current) {
      const planeHeight = planeFrontRef.current.getPlaneSize().height
      setMansOffsetY(
        (planeHeight > height) ? 
        (height - planeHeight)/2 : 
        0
      )
    }
  }, [planeFrontRef.current, width, height])

  return (
    <>
      <Suspense fallback={`loading assets`}>
        {/* Base */}
        <a.group {...planeFrontSpring}>
          <Plane 
            ref={planeFrontRef}
            url="/kv/kv2_layer_1s.png"
            position={[0, 0, -300]}
            active={active}
          />
        </a.group>
        <a.group {...planeBackSpring}>
          <Plane 
            ref={planeBackRef}
            url="/kv/kv2_layer_2s.png"
            position={[0, 0, -300]}
            active={active}
          />
        </a.group>


        {/* Mans */}
        <group 
          position={[0, mansOffsetY, 0]}
        >
          {/* 下左 */}
          <Man
            url='/gltf/kv2-man1.gltf'
            active={active}
            position={[-width * .31, -height/2 + width * .23, -100]} 
            rotation={[-.2, -0.2, 0]} 
          />
          {/* 下右 */}
          <Man
            url='/gltf/kv2-man2.gltf'
            active={active}
            position={[-width * .2, -height/2 + width * .25, -100]}
            rotation={[-.4, -0.6, .2]}
          />
          {/* 上左 */}
          <Man
            url='/gltf/kv2-man4.gltf'
            active={active}
            position={width<600 ? [-width * .17, -height/2 + width * .37, -500] : [width * .08, -height/2 + width * 0.44, -500]} 
            rotation={[-.2, -0.8, 0]} 
            scale={0.9}
          />
          {/* 上右 */}
          <Man
            url='/gltf/kv2-man3.gltf'
            active={active}
            position={width<600 ? [-width * .08, -height/2 + width * .395, -500] : [width * .16, -height/2 + width * 0.46, -500]} 
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

const ResponsiveCamera = props => {
  const { children } = props
  const { width, height } = useThree(state => state.size)

  return (
    <Camera 
      left={width<600 ? -width*0.4 : -width/2}
      right={width<600 ? -width*0 : width/2}
      top={width<600 ? -height*.1 : height/2}
      bottom={width<600 ? -height*.5 : -height/2}
    >
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