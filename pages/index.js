import styles from "../styles/Home.module.css"
import Head from "next/head"
import useOneSignal from "../utils/useOneSignal"
import OneSignal from "../utils/oneSignal"

export default function Home() {
  useOneSignal()

  return (
    <>
      <OneSignal />
      <Head>
        <title>OneSignal + Next.js</title>
      </Head>
      <main className={styles.main}>
        <p>SMS Fallback Demo</p>
      </main>
    </>
  )
}
