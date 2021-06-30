import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Integrating OneSignal with a Next.js app."
          key="description"
        />
        <link rel="icon" href="/favicon.ico" key="favicon" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
