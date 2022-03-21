import { useRef, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useThree } from '@react-three/fiber'
import useStore from '@helpers/store'

const Man = dynamic(
  () => import('@components/canvas/Man'), 
  { 
    ssr: false, 
    // suspense: true, 
  }
)

const IndexPage = () => {
  const { width, height } = useThree(state => state.size)
  const offset = useStore(state => state.offset)
  // console.log(offset)
  return (
    <>
      <Suspense fallback={`loading assets`}>
        <group position={[0, offset, 0]}>
          <Man 
            position={[-width/4, 0, -100]} 
            rotation={[0, -0.8, 0]} 
          />
          <Man 
            position={[width/8, 0, -100]} 
            rotation={[0, -0.1, 0]} 
          />
        </group>
      </Suspense>
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </>
  )
}

export default IndexPage