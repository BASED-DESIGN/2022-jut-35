import * as THREE from "three"
import { useRef, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useThree, useFrame } from '@react-three/fiber'
import useStore from '@helpers/store'
import LightMouseTracker from '@src/components/canvas/objects/LightMouseTracker'

const Man = dynamic(() => import('@src/components/canvas/objects/Man'), { ssr: false })

const IndexPage = () => {
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

  return (
    <>
      <Suspense fallback={`loading assets`}>
        <group position={[0, 0, 0]}>
          {break1Bound &&
            <>
              <Man
                url='/gltf/kv2-man1.gltf'
                position={[-width* .4, height/2 - (break1Bound.top + break1Bound.height * .3), -100]} 
                rotation={[-.2, -0.2, 0]} 
              />
              <Man
                url='/gltf/kv2-man2.gltf'
                position={[-width * .3, height/2 - (break1Bound.top + break1Bound.height * .25), -100]} 
                rotation={[-.4, -0.5, 0]}
              />
              <Man
                url='/gltf/kv2-man2.gltf'
                position={[width * .38, height/2 - (break1Bound.top + break1Bound.height * .15), -100]} 
                rotation={[-.4, -0.5, 0]}
              />
            </>
          }

          {break2Bound &&
            <>
              <Man
                url='/gltf/kv1-man1.gltf'
                position={[-width * .4, height/2 - (break2Bound.top + break2Bound.height * .25), -100]} 
                rotation={[-.2, -0.8, 0]} 
              />
              <Man
                url='/gltf/kv1-man2.gltf'
                position={[-width * .31, height/2 - (break2Bound.top + break2Bound.height * .3), -100]} 
                rotation={[-.2, -0.8, 0]}
              />
              <Man
                url='/gltf/kv1-man3.gltf'
                position={[-width * .14, height/2 - (break2Bound.top + break2Bound.height * .4), -100]} 
                rotation={[-.2, -0.8, 0]}
              />
            </>
          }

          {break3Bound &&
            <>
              <Man
                url='/gltf/kv2-man1.gltf'
                position={[-width * .2, height/2 - (break3Bound.top + break3Bound.height * .35), -100]} 
                rotation={[-.3, -0.2, 0]} 
              />
              <Man
                url='/gltf/kv2-man2.gltf'
                position={[-width * .1, height/2 - (break3Bound.top + break3Bound.height * .3), -100]} 
                rotation={[-.5, -0.5, 0]}
              />
              <Man
                url='/gltf/kv2-man2.gltf'
                position={[width * .3, height/2 - (break3Bound.top + break3Bound.height * .15), -100]} 
                rotation={[-.5, -0.5, 0]}
                scale={1.2}
              />
            </>
          }

          {newWay1Bound &&
            <Man
              url='/gltf/kv2-man4.gltf'
              position={[width * .25, height/2 - (newWay1Bound.top - newWay1Bound.height * .08), -100]} 
              rotation={[0, -0.1, 0]} 
              scale={.8}
            />
          }

          {newWay2Bound &&
            <Man
              url='/gltf/kv1-man1.gltf'
              position={[width * .2, height/2 - (newWay2Bound.top - newWay2Bound.height * .08), -100]} 
              rotation={[0.3, 3.16, 0]} 
              scale={.9}
            />
          }

          {newWay3Bound &&
            <Man
              url='/gltf/kv2-man5.gltf'
              position={[-width * .36, height/2 - (newWay3Bound.top + newWay3Bound.height * .2), -100]} 
              rotation={[0, -0.6, 0]} 
              // scale={}
            />
          }

          {newWay4Bound &&
            <Man
              url='/gltf/kv2-man2.gltf'
              position={[width * .2, height/2 - (newWay4Bound.top - newWay4Bound.height * .08), -100]} 
              rotation={[0.3, 3.16, 0]} 
              // scale={.9}
            />
          }

          {newWay5Bound &&
            <Man
              url='/gltf/kv2-man4.gltf'
              position={[width * .25, height/2 - (newWay5Bound.top - newWay5Bound.height * .08), -100]} 
              rotation={[0, -0.1, 0]} 
              scale={.8}
            />
          }


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
      <LightMouseTracker intensity={0.5} />
      {/* <Rig /> */}
    </>
  )
}

export default IndexPage

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  
  return useFrame(() => 
    camera.position.lerp(
      vec.set(mouse.x * 2000, mouse.y * 1000, camera.position.z)
    , 0.02)
  )
}