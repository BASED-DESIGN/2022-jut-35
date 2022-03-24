import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import Camera from './Camera'

const LCanvas = ({ 
  children, 
  wrapperClassName,
}) => {
  // const dom = useStore((state) => state.dom)

  return (
    <div className={wrapperClassName}>    
      <Canvas
        mode='concurrent'
        // onCreated={state => state.gl.setClearColor("rgb(218, 174, 53)")}
        // onCreated={(state) => state.events.connect(dom.current)}
        // camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <Preload all />
        <Camera>
          {children}
        </Camera>
      </Canvas>
    </div>
  )
}

export default LCanvas