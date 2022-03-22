import { useThree } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'
import useStore from '@helpers/store'

const Camera = props => {
  const { children } = props
  const { width, height } = useThree((state) => state.size)
  const offset = useStore(state => state.offset)

  return (
    <OrthographicCamera 
      makeDefault 
      left={- width / 2}
      right={width / 2}
      top={height / 2 - offset}
      bottom={- height / 2 - offset}
      // position={[0, -offset, 1000]}
      near={-1000}
      far={1000}
    >
      {children}
    </OrthographicCamera>
  )
}

export default Camera