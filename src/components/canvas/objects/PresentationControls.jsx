import { useMemo, useEffect, cloneElement, useRef } from 'react'
import { MathUtils } from 'three'
import { useThree } from '@react-three/fiber'
import { a, useSpring } from '@react-spring/three'
import { useGesture, useMove } from '@use-gesture/react'

export default function PresentationControls({
  snap,
  global,
  cursor = true,
  children,
  speed = 1,
  rotation = [0, 0, 0],
  position = [0, 0, 0],
  zoom = 1,
  polar = [0, Math.PI / 2],
  azimuth = [-Infinity, Infinity],
  height = [-100, 100],
  config = { mass: 1, tension: 120, friction: 14 },
  animMoveX=true,
  animMoveY=true,
  hover=true,
}) {
  const { size, gl } = useThree()
  const ref = useRef()

  const rPolar = useMemo(
    () => [
      rotation[0] + polar[0], 
      rotation[0] + polar[1]
    ],
    [rotation[0], polar[0], polar[1]]
  )
  const rAzimuth = useMemo(
    () => [
      rotation[1] + azimuth[0], 
      rotation[1] + azimuth[1]
    ],
    [rotation[1], azimuth[0], azimuth[1]]
  )
  const pHeight = useMemo(
    () => [
      position[1] + height[0], 
      position[1] + height[1]
    ],
    [position[1], height[0], height[1]]
  )
  const rInitial = useMemo(
    () => [
      MathUtils.clamp(rotation[0], ...rPolar), 
      MathUtils.clamp(rotation[1], ...rAzimuth), 
      rotation[2]
    ],
    [rotation[0], rotation[1], rotation[2], rPolar, rAzimuth]
  )
  const pInitial = useMemo(
    () => [
      position[0], 
      MathUtils.clamp(position[1], ...pHeight), 
      position[2]
    ],
    [position[0], position[1], position[2], pHeight]
  )

  const [spring, api] = useSpring(() => ({ scale: 1, rotation: rInitial, position: pInitial, config }))
  const [stareSpring, stareApi] = useSpring(() => ({ rotation: [0, 0, 0], config }))
  useEffect(() => void api.start({ scale: 1, rotation: rInitial, position: pInitial, config }), [rInitial, pInitial])
  useEffect(() => {
    if (global && cursor) gl.domElement.style.cursor = 'grab'
  }, [global, cursor, gl.domElement])
  
  const bind = useGesture({
    onHover: ({ last, hovering }) => {
      if(hover) {
        if (cursor && !global) gl.domElement.style.cursor = last ? 'auto' : 'grab'
        api.start({
          scale: hovering ? 0.99 : 1,
          position: hovering ? [position[0], position[1] + 15, position[2]] : position,
        })
      }
    },
    onDrag: ({ down, delta: [x, y], memo: [oldY, oldX] = spring.rotation.animation.to || rInitial }) => {
      if(hover) {
        if (cursor) gl.domElement.style.cursor = down ? 'grabbing' : 'grab'
        x = MathUtils.clamp(oldX + (x / size.width) * Math.PI * speed, ...rAzimuth)
        y = MathUtils.clamp(oldY + (y / size.height) * Math.PI * speed, ...rPolar)
        const sConfig = snap && !down && typeof snap !== 'boolean' ? snap : config
        api.start({
          scale: down && y > rPolar[1] / 2 ? zoom : 1,
          rotation: snap && !down ? rInitial : [y, x, 0],
          // config: n => console.log(n)
          // config: (n) => (n === 'scale' || n === 'position' ? { ...sConfig, friction: sConfig.friction * 3 } : sConfig),
        })
        return [y, x]
      }
    }
  },
  { target: global ? gl.domElement : undefined })

  // const bindWheel = useWheel(({ wheeling, delta: [deltaX, deltaY], memo: [oldX, oldY] = spring.position.animation.to || pInitial }) => {
  //   // console.log(deltaX, deltaY, oldX, oldY)
  //   const y = MathUtils.clamp(oldY + (-deltaY / size.height) * speed * 5, ...pHeight)
  //   api.start({
  //     position: snap && !wheeling ? pInitial : [position[0], y, position[2]],
  //   })
  // }, {
  //   target: gl.domElement
  // })

  const moveBind = useMove(({ xy, ...props }) => {
    // console.log(props)
    // const deltaX = xy[0] - size.width/2
    // const deltaY = xy[1] - size.height/2 - gl.domElement.getBoundingClientRect().top
    const deltaX = xy[0] - size.width/2 - pInitial[0]
    const deltaY = - (xy[1] - size.height/2 - gl.domElement.getBoundingClientRect().top) - pInitial[1] 
    stareApi.start({
      // rotation: [0, deltaX * .0003, deltaY * .0001]
      rotation: [0, animMoveX ? deltaX * .0003 : 0, animMoveY ? deltaY * .0001 : 0]
    })
  }, {
    // target: document.querySelector('body')
    target:  gl.domElement
  })

  return (
    <a.group {...bind?.()} {...(spring)}>
      <a.group {...moveBind?.()} {...stareSpring}>
        {cloneElement(children, { ref })}
      </a.group>
    </a.group>
  )
}