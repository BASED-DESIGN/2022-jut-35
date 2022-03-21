import { useRef, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useThree } from '@react-three/fiber'
import useStore from '@helpers/store'
import LightMouseTracker from '@components/canvas/LightMouseTracker'

const Man = dynamic(() => import('@src/components/canvas/Man'), { ssr: false })

const IndexPage = () => {
  const { width, height } = useThree(state => state.size)
  const offset = useStore(state => state.offset)

  return (
    <>
      <Suspense fallback={`loading assets`}>
        <group position={[0, offset, 0]}>
          <Man
            url='/man-gltf/man1.gltf'
            position={[-width/3, 0, -100]} 
            rotation={[0, -0.8, 0]} 
          />
          <Man
            url='/man-gltf/man2.gltf'
            position={[-width/6, 0, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/man-gltf/man3.gltf'
            position={[0, 0, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/man-gltf/manx2.gltf'
            position={[width/3, 0, -100]} 
            rotation={[0, -0.1, 0]} 
          />

          <Man
            url='/man-gltf/man1.gltf'
            position={[-width/3, -height, -100]} 
            rotation={[0, -0.8, 0]} 
          />
          <Man
            url='/man-gltf/man2.gltf'
            position={[-width/6, -height, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/man-gltf/man3.gltf'
            position={[0, -height, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/man-gltf/manx2.gltf'
            position={[width/3, -height, -100]} 
            rotation={[0, -0.1, 0]} 
          />

          <Man
            url='/man-gltf/man1.gltf'
            position={[-width/3, -2*height, -100]} 
            rotation={[0, -0.8, 0]} 
          />
          <Man
            url='/man-gltf/man2.gltf'
            position={[-width/6, -2*height, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/man-gltf/man3.gltf'
            position={[0, -2*height, -100]} 
            rotation={[0, -0.1, 0]} 
          />
          <Man
            url='/man-gltf/manx2.gltf'
            position={[width/3, -2*height, -100]} 
            rotation={[0, -0.1, 0]} 
          />
        </group>
      </Suspense>
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
      <LightMouseTracker
        // refContainer={refGLTFDisplayer}
        // intensity={mouseLightIntensity}
        // color={mouseLightColor}
      />
    </>
  )
}

export default IndexPage