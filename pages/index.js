import styles from "../styles/Home.module.css"
import Head from "next/head"
import useOneSignal from "../utils/useOneSignal"

export default function Home() {
  useOneSignal()

  return <main className={styles.main}>Hello</main>
}
