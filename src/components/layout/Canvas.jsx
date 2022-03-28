import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useInView } from 'react-intersection-observer'
import useStore from '@helpers/store'

const LCanvas = ({ 
  children, 
  wrapperClassName,
  name
}) => {
  const { ref, inView } = useInView()
  const videoEnded = useStore(state => state.videoEnded)
  console.log(name, 'frame inView?', inView)

  return (
    <div ref={ref} className={wrapperClassName}>    
      <Canvas
        // frameloop="demand"
        mode='concurrent'
        // gl={{ preserveDrawingBuffer: true }}
      >
        <Preload all />
        {(!videoEnded || !inView) && <DisableRender />}
        {children}
      </Canvas>
    </div>
  )
}

const DisableRender = () => useFrame(() => null, 1000)

export default LCanvas