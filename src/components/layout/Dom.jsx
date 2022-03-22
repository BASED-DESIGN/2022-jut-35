import { MathUtils } from 'three'
import { useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useState, useEffect, useRef, cloneElement } from 'react'
import { useWheel } from '@use-gesture/react'
import useStore from '@helpers/store'
import IndexPage from '@src/pages/dev-dom'

const Dom = props => {
  // const { position=[0, 0], children } = props
  const { width, height } = useThree((state) => state.size)
  const gl = useThree(state => state.gl)
  const offset = useStore(state => state.offset)
  const globalScale = useStore(state => state.globalScale)
  const setOffset = useStore(state => state.setOffset)
  const ref = useRef()
  const [pageHeight, setPageHeight] = useState(height)

  useEffect(() => {
    if(ref.current.offsetHeight !== pageHeight) setPageHeight(ref.current.offsetHeight)
  }, [ref.current])

  return (
    <>
      <mesh 
        position={[0, 0, -500]} 
        scale={[globalScale, globalScale, globalScale]}
      >
        <meshPhongMaterial 
          attach="material" 
          color="black"
        />
        <planeBufferGeometry 
          attach="geometry" 
          args={[width, height]}
        >
          <Html
            // as="div"
            // ref={ref}
            // wrapperClass="-z-10"
            className="pointer-events-none"
            style={{
              // width: '100%'
              width: width + 'px',
              height: height + 'px',
              transform: `translate3d(${-width/2}px, ${-height/2 - offset}px, 0) scale(${globalScale}, ${globalScale})`,
              // willChange: 'transform',
            }}
            // transform
            center
            // prepend
            // occlude
          >
            <IndexPage ref={ref} />
            {/* {cloneElement(children, { ref })} */}
          </Html>
        </planeBufferGeometry>
      </mesh>
      

      <mesh 
        position={[width*globalScale, 0, -500]} 
        scale={[globalScale, globalScale, globalScale]}
      >
        <meshPhongMaterial 
          attach="material" 
          color="black"
        />
        <planeBufferGeometry 
          attach="geometry" 
          args={[width, pageHeight]}
        >
          <Html
            // as="div"
            // ref={ref}
            // wrapperClass="-z-10"
            className="pointer-events-none"
            style={{
              // width: '100%'
              width: width + 'px',
              height: height + 'px',
              transform: `translate3d(${-width/2}px, ${-height/2 - offset}px, 0) scale(${globalScale}, ${globalScale})`,
              // willChange: 'transform',
            }}
            // transform
            center
            // prepend
            // occlude
          >
            {/* <IndexPage ref={ref} /> */}
            {/* {cloneElement(children, { ref })} */}
          </Html>
        </planeBufferGeometry>
      </mesh>
    </>
  )
}

export default Dom