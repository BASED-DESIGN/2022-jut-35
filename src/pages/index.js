import Head from 'next/head'
import IndexPage from '@components/doms/IndexPage'

// About Next dynamic, React.Suspense, React.lazy discussion:
// https://github.com/vercel/next.js/discussions/17979

const Home = () => (
  <>
    <Head>
      <title>忠泰集團 35 週年</title>
      <meta name="description" content="忠泰集團 35 週年" />
      {/* <link rel="icon" href="./favicon.ico" /> */}
    </Head>

    {/* <Canvas 
      wrapperClassName="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      followPageScroll={true}
    >
      <CanvasContent />
    </Canvas>

    <Scroller>
      <DomContent />
    </Scroller> */}

    <IndexPage />
  </>
)

export default Home