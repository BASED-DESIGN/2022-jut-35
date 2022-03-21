import Head from 'next/head'
import dynamic from 'next/dynamic'
import DomContent from '@components/doms/IndexPage'
import CanvasContent from '@components/canvas/IndexPage'

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

      <Dom>
        <DomContent />
      </Dom>
    </Canvas>
  </>
)

export default Home