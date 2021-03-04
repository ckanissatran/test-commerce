import React from 'react'

export default function SubscribeButton() {
    const [paid, setPaid] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        window.paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'gold',
                layout: 'vertical',
                label: 'subscribe'
            },
            createSubscription: function(data, actions) {
              return actions.subscription.create({
                'plan_id': 'P-7WK86341LT277951EMBAUXYI'
              });
            },
            onApprove: function(data, actions) {
                setPaid(true)
                alert(data.subscriptionID);
            },
            onError: (err) => {
                setError(err),
                console.error(err);
            },
        }).render('#paypal-button-container')
    }, [])

     // If the payment has been made
    if (paid) {
        return <div>Payment successful.!</div>;
    }

    // If any error occurs
    if (error) {
        return <div>Error Occurred in processing payment.! Please try again.</div>;
    }

    return (
        <div>
            <h3>Subscribe to the workout plan of doom</h3>
           <div id="paypal-button-container"></div>
        </div>
    )
}

