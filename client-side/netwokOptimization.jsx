//Minimize Network Requests:

import React, { useState } from 'react';

export const MyComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response1 = await fetch('https://api.example.com/data1');
      const result1 = await response1.json();
      setData((prevData) => [...prevData, result1]);

      const response2 = await fetch('https://api.example.com/data2');
      const result2 = await response2.json();
      setData((prevData) => [...prevData, result2]);
      
      // More network requests...

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};




//Bad
import React, { useState, useEffect } from 'react';

export const MyComponent2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [response1, response2] = await Promise.all([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
      ]);

      const [result1, result2] = await Promise.all([
        response1.json(),
        response2.json()
      ]);

      setData([...result1, ...result2]);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

