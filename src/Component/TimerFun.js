import React, { useState, useEffect } from "react";

export default function TimerFun() {
  let Timee = new Date().toLocaleTimeString();
  console.log(Timee);

  const [Time, setTime] = useState(Timee);

  const Times = () => {
    setTime(new Date().toLocaleTimeString())  };

  useEffect(() => {
    const timeRef = setInterval(Times, 1000);

    return () => {
      clearInterval(timeRef);
    };
  }, []);

  return <div>{Time}</div>;
}

