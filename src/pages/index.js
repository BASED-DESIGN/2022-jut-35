import Head from 'next/head'
import IndexPage from '@components/doms/IndexPage'
import getCreativeList from '@apis/getCreativeList'
import useStore from '@helpers/store'
import { useEffect } from 'react'
import { randomItem } from '@helpers/utils'
import { useGLTF } from '@react-three/drei'

// About Next dynamic, React.Suspense, React.lazy discussion:
// https://github.com/vercel/next.js/discussions/17979

const favIcons = ['/icon_fav_1.png', '/icon_fav_1.png', '/icon_fav_2.png', '/icon_fav_2.png'];

const Home = ({ creativeList=[] }) => {
  const videoEnded = useStore(state => state.videoEnded)

  useEffect(() => {
    useStore.setState({ creativeList })
    // useGLTF.preload('/gltf-anime-2/man-animation.gltf')
    // setTimeout(() => {
    //   document.scrollingElement.scrollTop = 0
    // }, 300)
  }, [])
  
  useEffect(() => {
    document.scrollingElement.style.overflowY = videoEnded ? 'auto' : 'hidden'
  }, [videoEnded])

  return (
    <>
      <Head>
        <title>三五成群 破浪前行・忠泰集團 35 週年</title>
        <meta name="description" content="我們期許以「A Better Tomorrow」的企業價值，創造一個平行於台北的平行城市、以忠泰事業系統所築構的生態體系，能獨立於城市傲然而生，同時又與原屬地共生共長，迎接每一個美好的明天。" />
        <link rel="icon" href={randomItem(favIcons)} />

        <meta property="og:title" content="三五成群 破浪前行・忠泰集團 35 週年" />
        <meta property="og:url" content="我們期許以「A Better Tomorrow」的企業價值，創造一個平行於台北的平行城市、以忠泰事業系統所築構的生態體系，能獨立於城市傲然而生，同時又與原屬地共生共長，迎接每一個美好的明天。" />
        <meta property="og:image" content="/social.jpg" />

        <meta name="twitter:title" content="三五成群 破浪前行・忠泰集團 35 週年" />
        <meta name="twitter:description" content="我們期許以「A Better Tomorrow」的企業價值，創造一個平行於台北的平行城市、以忠泰事業系統所築構的生態體系，能獨立於城市傲然而生，同時又與原屬地共生共長，迎接每一個美好的明天。" />
        <meta name="twitter:image" content="/social.jpg" />

        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-191726678-2`}/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-191726678-2', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-THQBBVWGE8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-THQBBVWGE8');
            `,
          }}
        /> */}

      </Head>

      <IndexPage />
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const creativeList = await getCreativeList()
  // const creativeList = []
  return {
    props: {
      creativeList
    },
  }
}

export default Home