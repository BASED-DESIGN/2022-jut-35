import { useThree } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'
import { useEffect, useRef } from 'react'

const Camera = props => {
  const { width, height } = useThree((state) => state.size)
  const { 
    children, 
    left=-width/2,
    top=height/2,
    right=width/2,
    bottom=-height/2
  } = props
  const camera = useRef()

  useEffect(() => {
    camera.current.left = left
    camera.current.right = right
    camera.current.bottom = bottom
    camera.current.top = top
    camera.current.updateProjectionMatrix()
  }, [left, top, right, bottom])
  
  return (
    <OrthographicCamera 
      ref={camera}
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