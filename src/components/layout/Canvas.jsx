import { Canvas, useFrame } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import useStore from '@helpers/store'
import { useState, useEffect, cloneElement } from 'react'

const LCanvas = ({ 
  children, 
  wrapperClassName,
  name,
}) => {
  const { ref, inView } = useInView()
  const videoEnded = useStore(state => state.videoEnded)
  const [rendered, setRendered] = useState(inView)
  // console.log(name, 'frame active?', !(!videoEnded || !inView || !customInView), inView, customInView)

  useEffect(() => {
    if(!rendered && videoEnded && inView) setRendered(true)
  }, [inView, videoEnded])

  useEffect(() => {
    // console.log(name, rendered)
  }, [rendered])

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
        {(!videoEnded || !inView) && <DisableRender />}
        {/* {cloneElement(children, { active: rendered })} */}
        {/* {children} */}
        {children({ active: rendered })}
      </Canvas>
    </div>
  )
}

const DisableRender = () => useFrame(() => null, 1000)

export default LCanvas