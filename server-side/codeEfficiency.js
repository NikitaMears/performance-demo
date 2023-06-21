// Code Efficiency

//Algorithmic Optimization:
// Bad Example: Finding the maximum value in an array using an inefficient nested loop
app.get('/max-value', (req, res) => {
    const numbers = [5, 8, 2, 10, 3];
    let max = numbers[0];
  
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
          max = numbers[j];
        }
      }
    }
  
    res.send(`The maximum value is: ${max}`);
  });

  
 // Good Example: Finding the maximum value in an array using the Math.max() method
app.get('/max-value', (req, res) => {
    const numbers = [5, 8, 2, 10, 3];
    const max = Math.max(...numbers);
  
    res.send(`The maximum value is: ${max}`);
  });

  
//Data Structure Optimization:

  // Bad Example: Using an array for duplicate value checking without optimization
app.post('/users', (req, res) => {
    const { name, email } = req.body;
  
    // Check if the email already exists in the database
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).send('Email already exists');
    }
  
    // Add the new user to the database
    const newUser = { name, email };
    users.push(newUser);
  
    res.send('User created successfully');
  });

  
 // Good Example: Using a Map data structure for efficient duplicate value checking
const emailMap = new Map();

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  // Check if the email already exists in the database
  if (emailMap.has(email)) {
    return res.status(400).send('Email already exists');
  }

  // Add the new user to the database
  const newUser = { name, email };
  users.push(newUser);
  emailMap.set(email, true);

  res.send('User created successfully');
});


//Eliminating Redundant Computations:
// Bad Example: Performing the expensive calculation on every request without caching
app.get('/expensive-calculation', (req, res) => {
    const result = performExpensiveCalculation();
    res.send(`Result: ${result}`);
  });

  
  // Good Example: Caching the result of an expensive computation using a variable
let cachedResult;

app.get('/expensive-calculation', (req, res) => {
  if (cachedResult) {
    // Return the cached result if available
    res.send(`Result from cache: ${cachedResult}`);
  } else {
    // Perform the expensive calculation
    const result = performExpensiveCalculation();

    // Cache the result for future use
    cachedResult = result;

    res.send(`New result: ${result}`);
  }
});

 