import { useRef, useEffect, Suspense } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import IndexPage from '@components/doms/IndexPage'
// import { Camera } from '@components/layout/C'

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

const Man = dynamic(
  () => import('@components/canvas/Man'), 
  { 
    ssr: false, 
    // suspense: true, 
  }
)

export default function Home() {
  return (
    <>
      <Head>
        <title>忠泰集團 35 週年</title>
        <meta name="description" content="忠泰集團 35 週年" />
        {/* <link rel="icon" href="./favicon.ico" /> */}
      </Head>

      <Canvas>
        <Suspense fallback={`loading assets`}>
          <Man />
        </Suspense>
        <directionalLight position={[5, 5, 5]} />
        <ambientLight />

        <Dom>
          <IndexPage />
        </Dom>
      </Canvas>
    </>
  )
}
