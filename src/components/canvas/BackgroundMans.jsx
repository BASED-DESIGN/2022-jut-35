import * as THREE from "three"
import { Suspense } from 'react'
import { useThree } from '@react-three/fiber'
import useStore from '@helpers/store'

import Canvas from '@components/layout/Canvas'
import Camera from '@components/layout/Camera'
import Man from '@components/canvas/objects/Man'

const Content = () => {
  const gl = useThree(state => state.gl)
  const { width, height } = useThree(state => state.size)
  const break1Ref = useStore(state => state.break1Ref)
  const break1Bound = break1Ref.current ? break1Ref.current.getBoundingClientRect() : null
  const break2Ref = useStore(state => state.break2Ref)
  const break2Bound = break2Ref.current ? break2Ref.current.getBoundingClientRect() : null
  const break3Ref = useStore(state => state.break3Ref)
  const break3Bound = break3Ref.current ? break3Ref.current.getBoundingClientRect() : null

  const newWay1Ref = useStore(state => state.newWay1Ref)
  const newWay1Bound = newWay1Ref.current ? newWay1Ref.current.getBoundingClientRect() : null
  const newWay2Ref = useStore(state => state.newWay2Ref)
  const newWay2Bound = newWay2Ref.current ? newWay2Ref.current.getBoundingClientRect() : null
  const newWay3Ref = useStore(state => state.newWay3Ref)
  const newWay3Bound = newWay3Ref.current ? newWay3Ref.current.getBoundingClientRect() : null
  const newWay4Ref = useStore(state => state.newWay4Ref)
  const newWay4Bound = newWay4Ref.current ? newWay4Ref.current.getBoundingClientRect() : null
  const newWay5Ref = useStore(state => state.newWay5Ref)
  const newWay5Bound = newWay5Ref.current ? newWay5Ref.current.getBoundingClientRect() : null

  // useFrame((state) => {
  //   console.log(break1Bound)
  //   console.log(break2Bound)
  //   // if(planeFrontRef.current) planeFrontRef.current.position.z = t
  //   // if(planeFrontRef.current) console.log(planeFrontRef.current)
  //   // ref.current.rotation.y = Math.sin(t / 2) / 6
  //   // ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
  //   // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  // })

  return (
    <>
      {/* <primitive object={new THREE.AxesHelper(100)} /> */}
      <Suspense fallback={`loading assets`}>
        <group position={[0, gl.domElement.getBoundingClientRect().top, 0]}>
          {break1Bound !== null &&
            <>
              <Man
                url='/gltf/kv2-man1.gltf'
                position={[-width* .4, height/2 - (break1Bound.top + break1Bound.height * .3), -100]} 
                rotation={[-.2, -0.2, 0]}
                animMoveY={false}
                lazyIn
              />
              <Man
                url='/gltf/kv2-man2.gltf'
                position={[-width * .3, height/2 - (break1Bound.top + break1Bound.height * .25), -100]} 
                rotation={[-.4, -0.5, 0]}
                animMoveY={false}
                lazyIn
              />
              <Man
                url='/gltf/kv2-man2.gltf'
                position={[width * .38, height/2 - (break1Bound.top + break1Bound.height * .15), -100]} 
                rotation={[-.4, -0.5, 0]}
                animMoveY={false}
                lazyIn
              />
            </>
          }

          {break2Bound !== null &&
            <>
              <Man
                url='/gltf/kv1-man1.gltf'
                position={[-width * .4, height/2 - (break2Bound.top + break2Bound.height * .25), -100]} 
                rotation={[-.2, -0.8, 0]} 
                animMoveY={false}
                lazyIn
              />
              <Man
                url='/gltf/kv1-man2.gltf'
                position={[-width * .31, height/2 - (break2Bound.top + break2Bound.height * .3), -100]} 
                rotation={[-.2, -0.8, 0]}
                animMoveY={false}
                lazyIn
              />
              <Man
                url='/gltf/kv1-man3.gltf'
                position={[-width * .14, height/2 - (break2Bound.top + break2Bound.height * .4), -100]} 
                rotation={[-.2, -0.8, 0]}
                animMoveY={false}
                lazyIn
              />
            </>
          }

          {break3Bound !== null &&
            <>
              <Man
                url='/gltf/kv2-man1.gltf'
                position={[-width * .2, height/2 - (break3Bound.top + break3Bound.height * .35), -100]} 
                rotation={[-.3, -0.2, 0]} 
                animMoveY={false}
                lazyIn
              />
              <Man
                url='/gltf/kv2-man2.gltf'
                position={[-width * .1, height/2 - (break3Bound.top + break3Bound.height * .3), -100]} 
                rotation={[-.5, -0.5, 0]}
                animMoveY={false}
                lazyIn
              />
              <Man
                url='/gltf/kv2-man2.gltf'
                position={[width * .3, height/2 - (break3Bound.top + break3Bound.height * .15), -100]} 
                rotation={[-.5, -0.5, 0]}
                scale={1.2}
                animMoveY={false}
                lazyIn
              />
            </>
          }

          {newWay1Bound !== null &&
            <Man
              url='/gltf/kv2-man4.gltf'
              position={[width * .25, height/2 - (newWay1Bound.top - 10), -100]} 
              rotation={[0, -0.1, 0]} 
              scale={.8}
              animMoveY={false}
              lazyIn
            />
          }

          {newWay2Bound !== null &&
            <Man
              url='/gltf/kv1-man1.gltf'
              position={[width * .2, height/2 - (newWay2Bound.top - 10), -100]} 
              rotation={[0.3, 3.16, 0]} 
              scale={.9}
              animMoveY={false}
              lazyIn
            />
          }

          {newWay3Bound !== null &&
            <Man
              url='/gltf/kv2-man5.gltf'
              position={[-width * .36, height/2 - (newWay3Bound.top + 100), -100]} 
              rotation={[0, -0.6, 0]} 
              animMoveY={false}
              lazyIn
            />
          }

          {newWay4Bound !== null &&
            <Man
              url='/gltf/kv2-man2.gltf'
              position={[width * .2, height/2 - (newWay4Bound.top - 0), -100]} 
              rotation={[0.3, 3.16, 0]} 
              animMoveY={false}
              lazyIn
            />
          }

          {newWay5Bound !== null &&
            <Man
              url='/gltf/kv2-man4.gltf'
              position={[width * .25, height/2 - (newWay5Bound.top - 10), -100]} 
              rotation={[0, -0.1, 0]} 
              animMoveY={false}
              scale={.8}
              lazyIn
            />
          }


          {/* ///////////////////// */}
          {/* <Man
            url='/gltf/kv1-man1.gltf'
            position={[-width/3, 0, -100]} 
            rotation={[0, -0.8, 0]}
          />
          <Man
            url='/gltf/kv1-man2.gltf'
            position={[-width/6, 0, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/gltf/kv1-man3.gltf'
            position={[0, 0, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/gltf/kv1-manx2.gltf'
            position={[width/3, 0, -100]} 
            rotation={[0, -0.1, 0]} 
          />

          <Man
            url='/gltf/kv2-man1.gltf'
            position={[-width/3, -height/2, -100]} 
            rotation={[0, -0.8, 0]} 
          />
          <Man
            url='/gltf/kv2-man2.gltf'
            position={[-width/6, -height/2, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/gltf/kv2-man3.gltf'
            position={[0, -height/2, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/gltf/kv2-man4.gltf'
            position={[width/6, -height/2, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/gltf/kv2-man5.gltf'
            position={[width/3, -height/2, -100]} 
            rotation={[0, -0.1, 0]} 
          /> */}
        </group>
      </Suspense>

      <directionalLight position={[0, 0, 0]} intensity={0.5} />
      <ambientLight />
      {/* <LightMouseTracker intensity={0.5} /> */}
      {/* <Rig /> */}
    </>
  )
}

const ResponsiveCamera = props => {
  const { children } = props
  const { width, height } = useThree(state => state.size)
  
  return (
    <Camera 
      config={{
        left: - width / 2,
        right: width / 2,
        top: height / 2,
        bottom: - height / 2
      }}
    >
      {children}
    </Camera>
  )
}

export default function Scene(props) {
  return (   
    <Canvas name="bgmans" wrapperClassName="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-40">
      <ResponsiveCamera>
        <Content />
      </ResponsiveCamera>
    </Canvas>
  )
}