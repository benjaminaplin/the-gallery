import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Art Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Art Gallery
        </h1>
      </main>

      <footer className={styles.footer}>
        this is an art gallery footer
      </footer>
    </div>
  )
}
