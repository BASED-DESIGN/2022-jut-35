import { useThree } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'
import { useEffect } from 'react'

const Camera = props => {
  const { width, height } = useThree((state) => state.size)
  const { 
    children, 
    left=-width/2,
    top=height/2,
    right=width/2,
    bottom=-height/2
  } = props
  // console.log(config)
  const camera = useThree(state => state.camera)

  useEffect(() => {
    camera.left = left
    camera.right = right
    camera.bottom = bottom
    camera.top = top
    camera.updateProjectionMatrix()
  }, [left, top, right, bottom])
  
  return (
    <OrthographicCamera 
      makeDefault
      left={left}
      right={right}
      bottom={bottom}
      top={top}
      near={-500}
      far={1000}
    >
      {children}
    </OrthographicCamera>
  )
}

export default Camera