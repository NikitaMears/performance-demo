const express = require('express');
const dogapi = require('datadog-metrics');

// Initialize DataDog with your API key
const apikey = 'YOUR_API_KEY';
dogapi.initialize({ apiKey: apikey });

const app = express();

// Middleware to track request count
app.use((req, res, next) => {
  // Increment a custom metric for total requests
  dogapi.metric('app.requests', 1, { tags: ['route:all'] });

  next();
});

// Route to handle requests
app.get('/', (req, res) => {
  try {
    // Perform operations
    // ...

    // Increment a custom metric for successful requests
    dogapi.metric('app.successful_requests', 1, { tags: ['route:/'] });

    // Return response
    res.send('Hello, World!');
  } catch (error) {
    // Report the error to DataDog
    dogapi.error(error);

    // Increment a custom metric for failed requests
    dogapi.metric('app.failed_requests', 1, { tags: ['route:/'] });

    // Return error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
