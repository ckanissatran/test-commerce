import Layout from '../components/Layout'
import '../styles/globals.css'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

console.log(process.env.NODE_ENV)

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
  console.log('Firebase Connected!')
}

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp


