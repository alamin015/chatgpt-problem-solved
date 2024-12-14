import { useEffect, useState } from "react";

export default function Tick() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const handleTick = () => {
    setCount(count + increment);
  };
  useEffect(() => {
    const timerId = setInterval(handleTick, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [handleTick]);
  return (
    <div className="container">
      <div>
        <span style={{ fontSize: "28px" }}>Counter: {count}</span>
        <button className="btn" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <hr />
      <div>
        <span
          style={{
            fontSize: "28px",
            cursor: "pointer",
            borderWidth: "2px",
            borderColor: "red",
            borderStyle: "solid",
            padding: "1px 10px",
          }}
          disabled={increment === 0}
          onClick={() => setIncrement((i) => i - 1)}
        >
          -
        </span>
        <span style={{ fontSize: "28px", margin: "0 20px" }}>
          {increment < 1 ? 1 : increment}
        </span>
        <span
          style={{
            fontSize: "28px",
            cursor: "pointer",
            borderWidth: "2px",
            borderColor: "red",
            borderStyle: "solid",
            padding: "1px 10px",
          }}
          onClick={() => setIncrement((i) => i + 1)}
        >
          +
        </span>
      </div>
    </div>
  );
}
