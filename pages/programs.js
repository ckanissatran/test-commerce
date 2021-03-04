import React from 'react'
import SubscribeButton from '../components/SubscribeButton'
import ReactDOM from 'react-dom';

export default function Programs() {
    const [sdkReady, setSdkReady] = React.useState(false);

    const addPaypalSdk = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_CLIENT_ID}&vault=true&intent=subscription`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      script.onerror = () => {
        throw new Error('Paypal SDK could not be loaded.');
      };
  
      document.body.appendChild(script);
    };
  
    React.useEffect(() => {
        addPaypalSdk();
        return () => {
            document.body.removeChild(script);
        }      
    }, [])

    return (<>
        
        <div>Hello you are on the programs page</div>
        {sdkReady ? <SubscribeButton/> : <h1>Loading...</h1>}

    </>
    )
}
