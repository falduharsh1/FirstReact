import React, { useState } from "react";

export default function MyCountryFun() {
  const [Country, setCountry] = useState({
    name: "India",
    Population: "142 Billion",
  });

  const HandleCounty = () => {
    setCountry({
        name : 'USA',
        Population : '14 Billion'
    })
  }

  return (
    <div>
      <h2>Function Based Component</h2>
      <div>MyCountryFun : {Country.name}</div>
      <div>Population : {Country.Population}</div>
      <br></br>
      <button onClick={HandleCounty}>Change Country</button>
    </div>
  );
}
