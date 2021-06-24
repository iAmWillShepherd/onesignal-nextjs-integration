import Head from "next/head"
import "../styles/globals.css"
import useOneSignal from "../utils/useOneSignal"

function MyApp({ Component, pageProps }) {
  useOneSignal()

  return (
    <>
      <Head>
        <title>OneSignal + Next.js</title>
        <meta
          name="description"
          content="Integrating OneSignal with a Next.js app."
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
