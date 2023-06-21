const express = require('express');
const { execSync } = require('child_process');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');

  // Perform load testing after the server starts
  const abCommand = 'ab -n 1000 -c 100 http://localhost:3000/';
  console.log(`Performing load testing with command: ${abCommand}`);

  try {
    const output = execSync(abCommand);
    console.log(output.toString());
  } catch (error) {
    console.error('Error occurred during load testing:', error);
  }
});

//*

// Server is running on port 3000
// Performing load testing with command: ab -n 1000 -c 100 http://localhost:3000/

// Benchmarking localhost (be patient).....done

// Server Software:        Express
// Server Hostname:        localhost
// Server Port:            3000

// Document Path:          /
// Document Length:        13 bytes

// Concurrency Level:      100
// Time taken for tests:   3.215 seconds
// Complete requests:      1000
// Failed requests:        0
// Total transferred:      136000 bytes
// HTML transferred:       13000 bytes
// Requests per second:    311.04 [#/sec] (mean)
// Time per request:       321.547 [ms] (mean)
// Time per request:       3.215 [ms] (mean, across all concurrent requests)
// Transfer rate:          41.30 [Kbytes/sec] received

// Connection Times (ms)
//               min  mean[+/-sd] median   max
// Connect:        0   19  79.5      0    1000
// Processing:     5   47  94.5     24    1002
// Waiting:        3   44  95.0     20    1002
// Total:         10   66 139.9     24    1004

// Percentage of the requests served within a certain time (ms)
//   50%     24
//   66%     30
//   75%     33
//   80%     36
//   90%     53
//   95%     81
//   98%    321
//   99%    602
//  100%   1004 (longest request)
