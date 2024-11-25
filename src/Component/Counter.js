import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick_P = () => {
    console.log("plus");
    if(count<5){
      setCount(count + 1);
    }
  };

  const handleClick_m = () => {
    console.log("minus");
    if(count>0){
      setCount(count - 1);
    }
    
  };

  return (
    <>
      <button onClick={handleClick_P}>+</button>

      <button onClick={handleClick_m}>-</button>
      <span>
        <h2>{count}</h2>
      </span>

      <div>Counter</div>
    </>
  );
}
