import React from 'react'
import Head from 'next/head'
import SubscribeButton from '../components/SubscribeButton'

export default function Programs() {
    return (<>
        <Head>
            <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.CLIENT_ID}&vault=true&intent=subscription`} data-sdk-integration-source="button-factory"></script>
        </Head>
        <div>Hello you are on the programs page</div>
        <SubscribeButton/>

    </>
    )
}
