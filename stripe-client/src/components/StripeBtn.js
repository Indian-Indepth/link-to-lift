import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const StripeBtn = () => {
  const publishableKey = "pk_test_qc2sTW3E8xwrh8sE20Nv2D3700TsJPZcLA";
   
  const onToken = token => {
    const body = {
      amount: 999,
      token: token
  };  axios
      .post("https://localhost:3001/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };  return (
    <StripeCheckout
      label="Go Premium" //Component button text
      name="Business LLC" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Go Premium" //Submit button in modal
      amount={999} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};

export default StripeBtn;