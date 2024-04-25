import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [numberId, setNumberId] = useState('');
  const [response, setResponse] = useState(null);

  const handleCalculateAverage = async () => {
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${numberId}`);
      setResponse(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <label>
        Number ID:
        <input type="text" value={numberId} onChange={(e) => setNumberId(e.target.value)} />
      </label>
      <button onClick={handleCalculateAverage}>Calculate Average</button>
      {response && (
        <div>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
