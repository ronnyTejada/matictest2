import React, { useEffect, useState } from "react";

const Fibonacci = () => {
  const [number, setNumber] = useState(0);

  const getNumbersRange = (limit) => {
    if (limit <= 1) return limit;

    return getNumbersRange(limit - 1) + getNumbersRange(limit - 2);
  };

  useEffect(() => {
    let a = getNumbersRange(number);

    console.log(a);
  }, [number]);

  return (
    <>
      <input
        type="text"
        onChange={(val) => setNumber((prev) => (prev = val.target.value))}
      />
      <h1> {getNumbersRange(number)}</h1>
    </>
  );
};

export default Fibonacci;
