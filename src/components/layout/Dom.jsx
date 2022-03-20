import { useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useState } from 'react'
import { useWheel } from '@use-gesture/react'

const Dom = props => {
  const { children } = props
  const { width, height } = useThree((state) => state.size)
  const gl = useThree(state => state.gl)
  const [offset, setOffset] = useState(0)

  const bind = useWheel(({ wheeling, delta: [deltaX, deltaY] }) => {
    console.log('hi', deltaY)
    setOffset(offset += deltaY/2)
    // console.log(deltaX, deltaY, oldX, oldY)
    // const y = MathUtils.clamp(oldY + (-deltaY / size.height) * speed, ...pHeight)
    // api.start({
    //   position: snap && !wheeling ? pInitial : [0, y, 0],
    // })
  }, {
    target: gl.domElement
  })

  return (
    <mesh position={[0, 100, -500]} rotation={[0, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[width/2, height/2]} />
      <meshPhongMaterial attach="material" color="green" />
      <Html
        position={[0, 0, 0.51]}
        // as="div"
        // className="overflow-y-scroll"
        style={{
          width: width + 'px',
          height: height + 'px',
          // transform: `translate(${-width/2}px, ${-height/2 + offset}px)`,
          // willChange: 'transform',
        }}
        transform
        occlude
      >
        {children}
      </Html>
    </mesh>
  )
}

export default Dom