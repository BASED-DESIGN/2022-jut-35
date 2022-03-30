import { Canvas, useFrame } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import useStore from '@helpers/store'
import { useState, useEffect } from 'react'

const LCanvas = ({ 
  children, 
  wrapperClassName,
  name,
  customInView=true
}) => {
  const { ref, inView } = useInView()
  const videoEnded = useStore(state => state.videoEnded)
  const [rendered, setRendered] = useState(inView)
  // console.log(name, 'frame active?', !(!videoEnded || !inView || !customInView), inView, customInView)

  useEffect(() => {
    if(!rendered && inView) setRendered(true)
  }, [inView])

  return (
    <div 
      ref={ref} 
      className={wrapperClassName}
    >    
      <Canvas
        // frameloop="demand"
        // frameloop="demand"
        mode='concurrent'
        // gl={{ preserveDrawingBuffer: true }}
      >
        <Preload all />
        {(!videoEnded || !inView || !customInView) && <DisableRender />}
        {rendered && children}
        {/* {children} */}
      </Canvas>
    </div>
  )
}

const DisableRender = () => useFrame(() => null, 1000)

export default LCanvas