import React, { useEffect, useState } from "react";

const Exercise3 = () => {
  const [numbers, setNumbers] = useState([]);
 
  const getNumbersRange = (init, limit) => {
    let num=[]
    for (let i = init; i <= limit; i++) {
        num.push(i)

    }
    setNumbers(num);
  };

  useEffect(() => {
    getNumbersRange(1, 100);
  }, []);

  const processNumber=(num)=>{
    if((num % 3) === 0 && (num % 5) === 0){
        return 'fizz buzz' 
    }else if((num % 5) === 0){
        return 'buzz'  
    }else if((num % 3) === 0){
        return 'fizz'  
    }
  }

  return (
    <>
      {numbers.map((number) => {
        return <h4>{processNumber(number)}</h4>;
      })}
    </>
  );
};

export default Exercise3;
