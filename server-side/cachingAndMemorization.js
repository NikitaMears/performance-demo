const express = require('express');
const app = express();
const { Pool } = require('pg');

// Create a connection pool for PostgreSQL
const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // Modify the port if necessary
});

// Example: Caching and Memoization with Database Query
const cache = new Map();

app.get('/user/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  // Check if the result is already cached
  if (cache.has(id)) {
    console.log('Result retrieved from cache');
    return res.send(`User: ${cache.get(id)}`);
  }

  try {
    // Perform the database query
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    if (result.rows.length > 0) {
      // Cache the result for future use
      cache.set(id, result.rows[0].name);
      console.log('New result retrieved from the database');
      return res.send(`User: ${result.rows[0].name}`);
    } else {
      return res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error executing database query:', error);
    return res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
