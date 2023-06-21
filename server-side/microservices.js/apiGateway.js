// api-gateway.js
const express = require('express');
const app = express();
const axios = require('axios');

app.get('/users', async (req, res) => {
  try {
    // Make a request to the User Service
    const response = await axios.get('http://localhost:3001/users');
    const users = response.data;

    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/orders', async (req, res) => {
  try {
    // Make a request to the Order Service
    const response = await axios.get('http://localhost:3002/orders');
    const orders = response.data;

    res.json(orders);
  } catch (error) {
    console.error('Error retrieving orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});
