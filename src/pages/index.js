import Head from 'next/head'
import dynamic from 'next/dynamic'
import IndexPage from '@components/doms/IndexPage'
// import CanvasContent from '@components/canvas/IndexPage'
// import Scroller from '@components/doms/Scroller'

// About Next dynamic, React.Suspense, React.lazy discussion:
// https://github.com/vercel/next.js/discussions/17979

const Canvas = dynamic(
  () => import('@components/layout/Canvas'), 
  { ssr: false, }
)

// const Dom = dynamic(
//   () => import('@components/layout/Dom'), 
//   { ssr: false, }
// )

const Home = () => {
  // const offset = useStore(state => state.offset)
  // const setOffset = useStore(state => state.setOffset)
  // const gl = useThree(state => state.gl)

  // const bind = useWheel(({ wheeling, delta: [deltaX, deltaY] }) => {
  //   // const newOffset = MathUtils.clamp(offset + deltaY/2, 0, ref.current.offsetHeight - height) 
  //   const newOffset = offset + deltaY/2
  //   setOffset(newOffset)
  // }, {
  //   target: gl.domElement
  // })

  return (
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
}

export default Home