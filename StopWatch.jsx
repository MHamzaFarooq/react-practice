import { useEffect, useState } from "react";

function StopWatch() {
  const [startCount, setStartCount] = useState(false);

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (startCount) {
        setTime((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startCount]);

  return (
    <>
      <h1>{time}</h1>
      <button onClick={() => setStartCount(!startCount)}>
        {startCount ? "Stop" : "Start"}
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
      <button onClick={() => setStartCount(false)}>Pause</button>
    </>
  );
}

export default StopWatch;
