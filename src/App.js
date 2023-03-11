import React, { useState, useEffect } from 'react';

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Current Date and Time:</h1>
      <p>{dateTime.toLocaleString()}</p>
    </div>
  );
}

export default App;
