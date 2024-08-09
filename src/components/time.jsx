import React, { useState, useEffect } from 'react';

function RealTimeClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    {time.toLocaleTimeString()}
    </>
  );
}

export default RealTimeClock;
