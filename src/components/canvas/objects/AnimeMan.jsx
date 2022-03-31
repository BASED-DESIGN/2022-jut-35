import { forwardRef, useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import PresentationControls from '@components/canvas/objects/PresentationControls'
import { useTransition, a } from '@react-spring/three'
import * as THREE from 'three'

const Man = forwardRef((props, ref) => {
  const {
    url = `/man-gltf/man1.gltf`,
    scale=1,
    rotation,
    position,
    lazyIn=false,
    animMoveY,
    animMoveX,
  } = props
  const { animations, nodes, scene } = useGLTF(url)
  const { width, height } = useThree(state => state.size)
  const [active, setActive] = useState(!lazyIn)
  // console.log(animations, scene, nodes)
  const group = useRef()
  const [mixer] = useState(() => new THREE.AnimationMixer(nodes.Scene))
  
  const transition = useTransition(active && Object.keys(nodes).filter(key => key!=='Scene'), {
    // from: { scale: [1, 1, 1], rotation: [0, 0, 0] },
    from: { scale: [0, 0, 0], rotation: [0, 1, 0], position: [0, -30, 0] },
    enter: ({ r=.5 }) => ({ scale: [1, 1, 1], rotation: [0, 0, 0], position: [0, 0, 0] }),
    leave: { scale: [0.1, 0.1, 0.1], rotation: [0, 0, 0] },
    config: { mass: 3, tension: 1000, friction: 100, duration: 200 },
    // trail: 100
  })

  useEffect(() => {
    lazyIn && document.addEventListener('scroll', handleScroll)
    return () => lazyIn && document.removeEventListener('scroll', handleScroll)
  }, [active])

  const handleScroll = e => {
    if (!active && lazyIn) {
      const manScrollTop =  - (position[1] - height*.5) + (window.innerWidth+window.innerHeight) - window.innerHeight * .8
      if (e.target.scrollingElement.scrollTop > manScrollTop) {
        setActive(true)
      }
    }
  }

  useFrame((state, delta) => mixer.update(delta))
  useEffect(() => {
    // console.log(mixer)
    // mixer.clipAction(animations[0], group.current).play()
    const action = mixer.clipAction(animations[5], group.current)
    action.play()

    return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  }, [])

  return (
    <PresentationControls
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={rotation} // Default rotation
      position={position} // Default position
      polar={[-Math.PI / 3, Math.PI / 3]} // Vertical rotate limits
      azimuth={[-Math.PI / 1.4, Math.PI / 2]} // Horizontal rotate limits
      animMoveX={animMoveX}
      animMoveY={animMoveY}
    >      
      <group ref={group} dispose={null}>
      {/* <a.group > */}
      {/* <a.group > */}
        {/* {transition((props, key) => key && (
          <a.group {...props}>
            <mesh
              // {...props}
              ref={ref}
              key={`man-${key}`}
              scale={scale * width / 360}
              geometry={nodes[key].geometry} 
              position={nodes[key].position} 
              material={nodes[key].material} 
            />
          </a.group>
        ))} */}
        {/* </a.group> */}
        {/* </a.group> */}
        {transition((props, key) => key && (
          <a.group {...props}>
             <primitive
                object={scene}
                ref={ref}
                scale={scale * window.innerWidth / 360}
                geometry={nodes[key].geometry} 
                position={nodes[key].position} 
                material={nodes[key].material} 
              />
          </a.group>
        ))}
        <directionalLight intensity={1} position={[width/3, -height/3, 0]} />
      </group>
      
    </PresentationControls>
  )
})

Man.displayName = 'Man'

export default Man