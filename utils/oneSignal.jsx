import Head from "next/head"

const OneSignal = () => {
  const scriptSrc = "https://cdn.onesignal.com/sdks/OneSignalSDK.js"

  return (
    <Head>
      <script
        src={scriptSrc}
        type="text/javascript"
        charSet="UTF-8"
        async=""
        key="onesignal-sdk"
      />
    </Head>
  )
}

export default OneSignal
