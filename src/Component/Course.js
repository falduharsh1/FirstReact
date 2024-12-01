import React, { useState } from "react";
import Fees from "./Fees";

export default function Course() {
  const [C_Name, setName] = useState([
    {
      Name: "Full Stack Development",
      Duration: "12 Month",
    },
    {
      Name: "React JS Development",
      Duration: "8 Month",
    },
    {
      Name: "Ui/Ux Development",
      Duration: "5 Month",
    },
  ]);

  console.log(C_Name);

  const [Count ,setCount] = useState(0)

  const Add_Data = () => {
    if(Count < C_Name.length -1){
      setCount(Count + 1)
    }
  }

  const Remove_Data = () => {
    if(Count > 0){
      setCount(Count - 1)
    }
  }

  return (
    <>
      {/* {C_Name.map((v, i) => (
        <>
          <span>{v.Name} </span>   
          <span>{v.Duration}</span>
          <Fees cName={v.Name} />
        </>
        
      ))} */}
      <button onClick={Add_Data} disabled = {Count ===   C_Name.length -1} >Next Course </button>
      <button onClick={Remove_Data} disabled = {Count === 0}>Previous Course</button>
      <br></br>
      <span>{C_Name[Count].Name}</span>
      <br></br>
      <span>{C_Name[Count].Duration}</span>
      <br></br>
      <Fees cName={C_Name[Count].Name} />
     
    </>
  );
}
