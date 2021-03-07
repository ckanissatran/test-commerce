import Layout from '../components/Layout'
import '../styles/globals.css'
import { firebaseConfig } from '../keys'
import firebase from 'firebase'

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
  console.log('Firebase Connected!')
}

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
