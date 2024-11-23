import React, { useState } from "react";

// export default function MyCountryFun() {
//   const [Name, setName] = useState("INDIA");
//   const [Population, setPopulation] = useState("135 Billion");

  // const HandleCounty = () => {
  //   setName("USA");
  //   setPopulation("15 Billion");
  //   setShow(!show);
  //   if (Name === "INDIA") {
  //     setName("USA");
  //     setPopulation("15 Billion");
  //   } else {
  //     setName("INDIA");
  //     setPopulation("135 Billion");
  //   }
  // };

  export default function MyCountryFun() {
    const [Name, setName] = useState(true);
    const [Population, setPopulation] = useState(true);


  const HandleCounty = () => {
    setName(!Name);
    setPopulation(!Population)
  }

  return (
    <div>
      <h2>Function Based Component</h2>
      <div>MyCountryFun : {Name ? 'INDIA' : 'USA'}</div>
      <div>Population : {Population ? '135 Billion' : '15 Billion'}</div>
      <br></br>
      <button onClick={HandleCounty}>Change Country</button>
    </div>
  );
}
