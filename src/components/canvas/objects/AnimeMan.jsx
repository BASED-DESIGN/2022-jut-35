import { forwardRef, useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useTransition, a } from '@react-spring/three'
import * as THREE from 'three'
import { MathUtils } from 'three'

const AnimeMan = forwardRef((props, ref) => {
  const {
    url = `/gltf-anime/man-animation.gltf`,
    scale=1,
    rotation,
    position,
    lazyIn=false,
    animMoveY,
    animMoveX,
    animeIndex=0,
    active=true
  } = props
  const { animations, nodes, scene } = useGLTF(url)
  const { width, height } = useThree(state => state.size)
  // const [active, setActive] = useState(!lazyIn)
  // console.log(animations, scene, nodes, last)
  const group = useRef()
  const [mixer] = useState(() => new THREE.AnimationMixer(nodes.Scene))
  
  const transition = useTransition(Object.keys(nodes).filter(key => key!=='Scene'), {
    // from: { scale: [1, 1, 1], rotation: [0, 0, 0] },
    from: { scale: [0, 0, 0], rotation: [0, 1, 0], position: [0, -30, 0] },
    enter: ({ r=.5 }) => ({ scale: [.3, .3, .3], rotation: [0, 0, 0], position: [0, 0, 0] }),
    leave: { scale: [0.1, 0.1, 0.1], rotation: [0, 0, 0] },
    config: { mass: 3, tension: 1000, friction: 100, duration: 200 },
    // trail: 100
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

  useFrame((state, delta) => mixer.update(delta))
  useEffect(() => {
    const action = mixer.clipAction(animations[animeIndex], group.current)
    action.play()
    return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  }, [])

  return (    
    <a.group
      ref={group}
      rotation={rotation} // Default rotation
      position={position} // Default position
    >
      {transition((props, key) => key && (
        <a.group {...props}>
          <primitive
            // dispose={null}
            object={scene}
            ref={ref}
            // scale={scale * window.innerWidth / 360}
            // scale={(window.innerWidth < 640 ? 2 : 1.05) * window.innerWidth / 360}
            scale={MathUtils.clamp((window.innerWidth < 640 ? 2 : 1.05) * window.innerWidth / 360, 0, 5)}
            geometry={nodes[key].geometry} 
            position={nodes[key].position} 
            material={nodes[key].material} 
          />
        </a.group>
      ))}
      <directionalLight intensity={1} position={[width/3, height/3, 0]} />
    </a.group>
  )
})
AnimeMan.displayName = 'AnimeMan'

export default AnimeMan