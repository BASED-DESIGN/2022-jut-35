import { useMemo, useEffect } from 'react'
import { MathUtils } from 'three'
import { useThree } from '@react-three/fiber'
import { a, useSpring } from '@react-spring/three'
import { useDrag, useGesture, useHover, useWheel } from '@use-gesture/react'

// type Props = {
//   snap?: boolean
//   global?: boolean
//   cursor?: boolean
//   speed?: number
//   zoom?: number
//   rotation?: [number, number, number]
//   polar?: [number, number]
//   azimuth?: [number, number]
//   config?: any
//   children?: React.ReactNode
// }

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
  config = { mass: 1, tension: 170, friction: 26 },
}) {
  const { size, gl } = useThree()
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
  
  useEffect(() => void api.start({ scale: 1, rotation: rInitial, position: pInitial, config }), [rInitial, pInitial])
  useEffect(() => {
    if (global && cursor) gl.domElement.style.cursor = 'grab'
  }, [global, cursor, gl.domElement])
  
  const bind = useGesture({
    onHover: ({ last }) => {
      if (cursor && !global) gl.domElement.style.cursor = last ? 'auto' : 'grab'
    },
    onDrag: ({ down, delta: [x, y], memo: [oldY, oldX] = spring.rotation.animation.to || rInitial }) => {
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
  },
  { target: global ? gl.domElement : undefined }
  )

  // const bindWheel = useWheel(({ wheeling, delta: [deltaX, deltaY], memo: [oldX, oldY] = spring.position.animation.to || pInitial }) => {
  //   // console.log(deltaX, deltaY, oldX, oldY)
  //   const y = MathUtils.clamp(oldY + (-deltaY / size.height) * speed * 5, ...pHeight)
  //   api.start({
  //     position: snap && !wheeling ? pInitial : [position[0], y, position[2]],
  //   })
  // }, {
  //   target: gl.domElement
  // })

  return (
    <a.group {...bind?.()} {...(spring)}>
      {children}
    </a.group>
  )
}