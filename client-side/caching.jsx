import React from 'react';

const MyComponent = () => {
  const expensiveCalculation = () => {
    // Perform expensive calculation or fetch data
    // Return the result
  };

  return <div>{expensiveCalculation()}</div>;
};


import React, { useMemo } from 'react';

export const MyComponent2 = () => {
  const expensiveCalculation = useMemo(() => {
    // Perform expensive calculation or fetch data
    // Return the result
    // Example: Fetching data from an API
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      // Perform calculations on the data
      return data;
    };

    // Call the fetchData function to perform the calculation
    const result = fetchData();

    return result;
  }, []);

  return <div>{expensiveCalculation}</div>;
};


