import { MathUtils } from 'three'
import { useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useRef, cloneElement } from 'react'
import { useWheel } from '@use-gesture/react'
import useStore from '@helpers/store'

const Dom = props => {
  const { children } = props
  const { width, height } = useThree((state) => state.size)
  const gl = useThree(state => state.gl)
  const offset = useStore(state => state.offset)
  const setOffset = useStore(state => state.setOffset)
  const ref = useRef()

  const bind = useWheel(({ wheeling, delta: [deltaX, deltaY] }) => {
    // console.log(ref.current.offsetHeight)
  //   // console.log('hi', deltaY)
    const newOffset = MathUtils.clamp(offset + deltaY/2, 0, ref.current.offsetHeight - height) 
    setOffset(newOffset)
    // console.log(newOffset);
  //   // console.log(deltaX, deltaY, oldX, oldY)
  //   // const y = MathUtils.clamp(oldY + (-deltaY / size.height) * speed, ...pHeight)
  //   // api.start({
  //   //   position: snap && !wheeling ? pInitial : [0, y, 0],
  //   // })
  }, {
    target: gl.domElement
  })

  return (
    <mesh position={[0, 0, -500]} rotation={[0, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[width, height]} />
      <meshPhongMaterial 
        attach="material" 
        color="green"
      >
        <Html
          // position={[0, 0, 0.51]}
          // as="div"
          // ref={ref}
          // wrapperClass="-z-10"
          className="pointer-events-none wrap-main"
          style={{
            // width: '100%'
            width: width + 'px',
            height: height + 'px',
            transform: `translate3d(${-width/2}px, ${-height/2 - offset}px, 0)`,
            willChange: 'transform',
          }}
          // transform
          // center
          // prepend
          // occlude
        >
          {cloneElement(children, { ref })}
        </Html>
      </meshPhongMaterial>
    </mesh>
  )
}

export default Dom