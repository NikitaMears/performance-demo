// order-service.js
const express = require('express');
const app = express();

app.get('/orders', (req, res) => {
  // Retrieve orders from the order service's database or API
  const orders = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
  ];

  res.json(orders);
});

app.listen(3002, () => {
  console.log('Order service running on port 3002');
});
