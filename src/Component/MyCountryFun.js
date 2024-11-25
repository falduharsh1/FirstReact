import React, { useState } from "react";
import MyCountryFunProps from "./MyCountryFunProps";

export default function MyCountryFun() {
  const [Name, setName] = useState("INDIA");
  const [Population, setPopulation] = useState("135 Billion");

  const HandleCounty = () => {
    setName("USA");
    setPopulation("15 Billion");
    
    if (Name === "INDIA") {
      setName("USA");
      setPopulation("15 Billion");
    } else {
      setName("INDIA");
      setPopulation("135 Billion");
    }
  };

  return (
    <div>
      <h2>Function Based Component</h2>
      <div>MyCountryFun : {Name}</div>
      <div>Population : {Population}</div>
      <br></br>
      <button onClick={HandleCounty}>Change Country</button>
      <MyCountryFunProps name={Name} Population={Population}/>
    </div>
  );

  // export default function MyCountryFun() {
  //   const [Name, setName] = useState(true);
  //   const [Population, setPopulation] = useState(true);


  // const HandleCounty = () => {
  //   setName(!Name);
  //   setPopulation(!Population)
  // }

  // return (
  //   <div>
  //     <h2>Function Based Component</h2>
  //     <div>MyCountryFun : {Name ? 'INDIA' : 'USA'}</div>
  //     <div>Population : {Population ? '135 Billion' : '15 Billion'}</div>
  //     <br></br>
  //     <button onClick={HandleCounty}>Change Country</button>
  //   </div>
  // );
}
