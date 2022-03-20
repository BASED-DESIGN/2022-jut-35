import { useThree } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'

const Camera = props => {
  const { children } = props
  const { width, height } = useThree((state) => state.size)

  return (
    <OrthographicCamera 
      makeDefault 
      // position={[0, 0, 10]}
      left={- width / 2}
      right={width / 2}
      top={height / 2}
      bottom={- height / 2}
      position={[0, 0, 1000]}
      near={-1000}
      far={1000}
    >
      {children}
    </OrthographicCamera>
  )
}

export default Camera