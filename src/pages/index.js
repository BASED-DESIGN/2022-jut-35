import Head from 'next/head'
import dynamic from 'next/dynamic'
import DomContent from '@components/doms/IndexPage'
import CanvasContent from '@components/canvas/IndexPage'
import { useThree } from '@react-three/fiber'
import useStore from '@helpers/store'

// About Next dynamic, React.Suspense, React.lazy discussion:
// https://github.com/vercel/next.js/discussions/17979

const Canvas = dynamic(
  () => import('@src/components/layout/Canvas'), 
  { ssr: false, }
)

const Dom = dynamic(
  () => import('@src/components/layout/Dom'), 
  { ssr: false, }
)

const Home = () => (
  <>
    <Head>
      <title>忠泰集團 35 週年</title>
      <meta name="description" content="忠泰集團 35 週年" />
      {/* <link rel="icon" href="./favicon.ico" /> */}
    </Head>

    <Canvas>
      <CanvasContent />
      <Doms />
    </Canvas>
  </>
)

export default Home

const Doms = () => {
  const { width, height } = useThree(state => state.size)
  const globalScale = useStore(state => state.globalScale)

  return (
    <>
      <Dom position={[0, 0]}>
        <DomContent />
      </Dom>
      <Dom position={[width * globalScale, 0]}>
        <DomContent />
      </Dom>
    </>
  )
}