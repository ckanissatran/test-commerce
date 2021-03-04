import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PayPalButton from '../components/PayPalButton'

export default function Home() {
  useEffect(() => {
    console.log(process.env.CLIENT_ID)
  }, [process.env.CLIENT_ID]) 

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.CLIENT_ID}`}></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        What is going on
        <PayPalButton />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
