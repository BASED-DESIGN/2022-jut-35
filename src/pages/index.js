import Head from 'next/head'
import IndexPage from '@components/doms/IndexPage'

// About Next dynamic, React.Suspense, React.lazy discussion:
// https://github.com/vercel/next.js/discussions/17979

const favIcons = ['/icon_fav_1.png', '/icon_fav_2.png'];
function randomItem(items){
  return items[Math.floor(Math.random()*items.length)];
}

const Home = () => (
  <>
    <Head>
      <title>三五成群　破浪前行・忠泰集團 35 週年</title>
      <meta name="description" content="我們期許以「A Better Tomorrow」的企業價值，創造一個平行於台北的平行城市、以忠泰事業系統所築構的生態體系，能獨立於城市傲然而生，同時又與原屬地共生共長，迎接每一個美好的明天。" />
      <link rel="icon" href={randomItem(favIcons)} />
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