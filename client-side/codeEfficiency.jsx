//Algorithmic effficiency
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();

      // Inefficient algorithm: Linear search to find an item
      const item = result.find((item) => item.id === 5);

      setData(item);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {/* Render the fetched data */}
      <p>{data.name}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default MyComponent;


import React, { useEffect, useState } from 'react';

export const MyComponent2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();

      // Efficient algorithm: Store data in an object with IDs as keys
      const dataObject = {};
      result.forEach((item) => {
        dataObject[item.id] = item;
      });

      const item = dataObject[5];

      setData(item);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {/* Render the fetched data */}
      <p>{data.name}</p>
      <p>{data.description}</p>
    </div>
  );
};

//  - Data structure optimization

//Bad example

import React, { useState } from 'react';

export const MyComponent3 = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();

      // Inefficient data structure: Array concatenation
      const newData = data.concat(result);

      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};


// Good Example
import React, { useState } from 'react';

export const MyComponent4 = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();

      // Efficient data structure: Spread operator and array concatenation
      const newData = [...data, ...result];

      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};





