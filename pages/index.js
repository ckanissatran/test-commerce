import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PayPalButton from '../components/PayPalButton'

export default function Home() {

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
        <PayPalButton />
      </main>

    </div>
  )
}
