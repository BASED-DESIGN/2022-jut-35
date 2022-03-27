import { useThree } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'

const Camera = props => {
  const { width, height } = useThree((state) => state.size)
  const { 
    children, 
    config={}
  } = props
  // console.log(config)
  
  return (
    <OrthographicCamera 
      makeDefault
      {...config}
      near={-500}
      far={1000}
    >
      {children}
    </OrthographicCamera>
  )
}

export default Camera