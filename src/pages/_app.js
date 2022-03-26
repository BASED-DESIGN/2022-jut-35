import '../styles/globals.scss'
import '../styles/fonts.scss'
import '../styles/odometer-theme-default.css'
// import '../styles/odometer-theme-car.css'
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
