// user-service.js
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  // Retrieve users from the user service's database or API
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  res.json(users);
});

app.listen(3001, () => {
  console.log('User service running on port 3001');
});
