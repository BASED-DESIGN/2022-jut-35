import { forwardRef, useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import PresentationControls from '@components/canvas/objects/PresentationControls'
import { useTransition, a, config, easings } from '@react-spring/three'
import { MathUtils } from 'three'

const Man = forwardRef((props, ref) => {
  const {
    url = `/man-gltf/man1.gltf`,
    scale=1,
    rotation,
    position,
    lazyIn=false,
    animMoveY,
    animMoveX,
    delay=0,
    hover=true,
    active=false
  } = props
  const { nodes } = useGLTF(url)
  const { width, height } = useThree(state => state.size)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if(active) setTimeout(() => setStart(true), delay)
  }, [active])

  const transition = useTransition(start && Object.keys(nodes).filter(key => key!=='Scene'), {
    from: { scale: [0, 0, 0], rotation: [0, 1, 0], position: [0, -30, 0] },
    enter: ({ r=.5 }) => ({ scale: [1, 1, 1], rotation: [0, 0, 0], position: [0, 0, 0] }),
    leave: { scale: [0.1, 0.1, 0.1], rotation: [0, 0, 0] },
    // config: { mass: 3, tension: 1000, friction: 100, duration: 300 },
    config: { 
      ...config.wobbly, 
      duration: 1500, 
      easing: easings.easeInOutExpo
    }
  })

  // useEffect(() => {
  //   lazyIn && document.addEventListener('scroll', handleScroll)
  //   return () => lazyIn && document.removeEventListener('scroll', handleScroll)
  // }, [active])

  // const handleScroll = e => {
  //   if (!active && lazyIn) {
  //     const manScrollTop =  - (position[1] - height*.5) + (window.innerWidth+window.innerHeight) - window.innerHeight * .8
  //     if (e.target.scrollingElement.scrollTop > manScrollTop) {
  //       setActive(true)
  //     }
  //   }
  // }

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
      hover={hover}
    >      
      <group dispose={null}>
        {transition((props, key) => key && (
          <a.group {...props}>
            <mesh
              ref={ref}
              key={`man-${key}`}
              scale={MathUtils.clamp(scale * window.innerWidth / 360, 0, 5)}
              geometry={nodes[key].geometry} 
              position={nodes[key].position} 
              material={nodes[key].material} 
            />
          </a.group>
        ))}
        <directionalLight intensity={0.5} position={[50, 300, 50]} />
      </group>
    </PresentationControls>
  )
})

Man.displayName = 'Man'

export default Man