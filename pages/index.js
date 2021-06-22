import Head from "next/head"
import Image from "next/image"
import { useEffect } from "react"
import styles from "../styles/Home.module.css"

export default function Home() {
  useEffect(() => {
    OneSignal.push(async () => {
      const smsId = await OneSignal.getSMSId()
      console.log("SMS Id", smsId)
    })
  }, [])

  return (
    <div className={styles.container}>
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

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
