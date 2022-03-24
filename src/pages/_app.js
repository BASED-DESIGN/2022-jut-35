import '../styles/globals.scss'
import '../styles/fonts.scss'
import dynamic from 'next/dynamic'

const Loading = dynamic(import('@components/doms/Loading'), {
  ssr: false,
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Loading /> */}
    </>
  )
}

export default MyApp
