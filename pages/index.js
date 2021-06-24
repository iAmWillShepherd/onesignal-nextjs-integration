import { useEffect } from "react"
import styles from "../styles/Home.module.css"

export default function Home() {
  useEffect(() => {
    OneSignal.push(async () => {
      const smsId = await OneSignal.getSMSId()
      console.log("SMS Id", smsId)
    })
  }, [])

  return <main className={styles.main}>Hello</main>
}
