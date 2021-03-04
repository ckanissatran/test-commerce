import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PayPalButton from '../components/PayPalButton'
import React from 'react'


export default function Home() {
  const [sdkReady, setSdkReady] = React.useState(false);

  const addPaypalSdk = () => {
    console.log("&&&&HEY", process.env.CLIENT_ID)
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_CLIENT_ID}`;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    script.onerror = (err) => {
      console.log(err)
      throw new Error('Paypal SDK could not be loaded.');
    };

    document.body.appendChild(script);
  };

  React.useEffect(() => {
    if (window !== undefined && window.paypal === undefined) {
      addPaypalSdk();
    }
    return () => {
      document.body.removeChild(script);
    }  
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {sdkReady ? <PayPalButton /> : <h1>Loading...</h1>}
      </main>

    </div>
  )
}
