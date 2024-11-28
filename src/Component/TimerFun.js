import React, { useState, useEffect } from "react";

export default function TimerFun() {
  // 1.
  const [Time, setTime] = useState(new Date());

  const Tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    // 3.componentDidMount 4.componentDidUpdate
    setInterval(Tick, 1000);

    // 5.componentWillUnmount
    return () => {

    }
  }, []);

  // 2.
  return <div>{Time.toLocaleTimeString()}</div>;
}
