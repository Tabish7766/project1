import React, { useState } from "react";

export const TestCounter = () => {
  const [num, setNum] = useState(0);
  const Increament = () => {
    num < 20 && setNum(num + 5);
  };
  const Decrement = () => {
    num > 0 && setNum(num - 1);
  };
  return (
    <div>
      <button onClick={Increament}>Increament</button>
      <h1>{num}</h1>
      <button onClick={Decrement}>Decreament</button>
    </div>
  );
};
