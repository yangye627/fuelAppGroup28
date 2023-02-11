
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FuelHistory = () => {
  const [fuelHistory, setFuelHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('<API URL HERE>');
      setFuelHistory(result.data);
    };
    fetchData();
  }, []);
 
  return (
    <div>
      <h2>Fuel History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Fuel Type</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {fuelHistory.map(entry => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.fuelType}</td>
              <td>{entry.amount}</td>
              <td>{entry.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FuelHistory;