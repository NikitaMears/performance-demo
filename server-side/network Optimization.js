//Minimize Network Requests:

//Bad 
app.get('/combined-data', async (req, res) => {
    try {
      const userData = await fetchUserData();
      const orderData = await fetchOrderData();
  
      const combinedData = { userData, orderData };
      res.json(combinedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Good 

  app.get('/combined-data', async (req, res) => {
    try {
      const [userData, orderData] = await Promise.all([
        fetchUserData(),
        fetchOrderData(),
      ]);
  
      const combinedData = { userData, orderData };
      res.json(combinedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  async function fetchUserData() {
    // Fetch user data from an external API
    // Return the user data
  }
  
  async function fetchOrderData() {
    // Fetch order data from an external API
    // Return the order data
  }



  //Reduce Payload Size:

  //Bad 

  app.get('/user/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const user = await fetchUserData(id);
  
      res.json(user);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  //Good Approach
  app.get('/user/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const user = await fetchUserData(id);
  
      // Select only necessary fields to reduce payload size
      const { name, email, age } = user;
  
      res.json({ name, email, age });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  async function fetchUserData(id) {
    // Fetch user data from a database or an external API
    // Return the user data
  }
  
  async function fetchUserData(id) {
    // Fetch user data from a database or an external API
    // Return the user data
  }

  