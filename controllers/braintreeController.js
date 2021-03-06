const db = require("../models");
const braintree = require("braintree");
require("dotenv").config();

const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

exports.generateToken = (req, res) => {
  //
  gateway.clientToken.generate({}, function(err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.data.nonce;
  let amountFromTheClient = req.body.data.price;

  //charge
  let newTransaction = gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,
      options: {
        submitForSettlement: true,
      },
    },
    (error, result) => {
      if (error) {
        res.status(500).json(error);
      } else {
        if (result.success) {
          db.Transaction.create({
            userId: req.params.userId,
            transactionId: result.transaction.id,
            amount: amountFromTheClient,
            transactionType: result.transaction.type,
            billingAddress: req.body.data.billingAddress,
          })
            .then(dbModel => res.status(201).json(dbModel))
            .catch(err => res.status(422).json(err));
        }
      }
    }
  );
};
