import { createElement, useMemo, useRef, useState } from 'react'
// import useStore from '@helpers/store'
import { useFrame, useThree } from '@react-three/fiber'
import { Merged, useGLTF, useScroll } from '@react-three/drei'

const BusinessEntity = () => {
  const gltf = useGLTF('/0303-gltf/0303.gltf')
  const ref = useRef()
  const { width, height } = useThree((state) => state.viewport)

  const meshes = useMemo(() => {
    let Floors = {}
    Object.keys(gltf.nodes).map(key => {
      if (Number.isInteger(parseInt(key.split('-')[0]))) 
        Floors[key] = gltf.nodes[key]
    })
    return ({
      ...Floors
    })
  }, [gltf])
  // const router = useStore((s) => s.router)
  // // This reference will give us direct access to the THREE.Mesh object
  // const mesh = useRef(null)
  // // Set up state for the hovered and active state
  // const [hovered, setHover] = useState(false)
  // // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) =>
  //   mesh.current
  //     ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
  //     : null
  // )
  // Return the view, these are regular Threejs elements expressed in JSX

  const Floor = ({ models, number, ...props }) => (
    <group {...props} scale={[width*height/50 , width*height/50 , width*height/50 ]} position={[0, -.8, 0]}>
      {Object.keys(models).map(key => 
        key.split('-')[0] == number &&
        createElement(models[key], {
          position: gltf.nodes[key].position,
          rotation: gltf.nodes[key].rotation,
          scale: gltf.nodes[key].scale
        })
      )}
    </group>
  )

  return (
    <>
      <Merged meshes={meshes}>
        {(models) => (
          <group ref={ref} rotation={[0.3, .8, 0]} position={[0, 0, -5]}>
            {/* <Floor models={models} number="1" name="1A" /> */}
            <Floor models={models} number="2" name="2B" />
            {/* <Floor models={models} number="3" name="3A" /> */}
            {/* <Floor models={models} number="4" name="4B" /> */}
            {/* <Floor models={models} number="5" name="5B" /> */}
          </group>
        )}
      </Merged>
      {/* <mesh
        ref={mesh}
        onClick={() => router.push(router.route === '/' ? '/about' : '/')}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color={router.route === '/' ? 'orange' : 'hotpink'} />
      </mesh>
      <directionalLight position={[5, 5, 5]} />
      <ambientLight /> */}
    </>
  )
}

export default BusinessEntity