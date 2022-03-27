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
  // console.log(name, 'frame?', inView, videoEnded)

  return (
    <div ref={ref} className={wrapperClassName}>    
      <Canvas
        // mode='concurrent'
        // onCreated={state => state.gl.setClearColor("rgb(218, 174, 53)")}
        // onCreated={(state) => state.events.connect(dom.current)}
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