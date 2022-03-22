import * as THREE from "three"
import { useRef, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useThree, useFrame } from '@react-three/fiber'
import useStore from '@helpers/store'
import LightMouseTracker from '@src/components/canvas/objects/LightMouseTracker'

const Man = dynamic(() => import('@src/components/canvas/objects/Man'), { ssr: false })

const IndexPage = () => {
  const { width, height } = useThree(state => state.size)

  return (
    <>
      <Suspense fallback={`loading assets`}>
        <group position={[0, 0, 0]}>
          <Man
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
            position={[-width/3, -height, -100]} 
            rotation={[0, -0.8, 0]} 
          />
          <Man
            url='/gltf/kv2-man2.gltf'
            position={[-width/6, -height, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/gltf/kv2-man3.gltf'
            position={[0, -height, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/gltf/kv2-man4.gltf'
            position={[width/6, -height, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/gltf/kv2-man5.gltf'
            position={[width/3, -height, -100]} 
            rotation={[0, -0.1, 0]} 
          />
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