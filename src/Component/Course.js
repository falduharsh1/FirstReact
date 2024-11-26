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

  return (
    <>
      {C_Name.map((v, i) => (
        <>
          <span>{v.Name} </span>        
          <span>{v.Duration}</span>
          
          <Fees cName={v.Name} />
        </>
      ))}

     
    </>
  );
}
