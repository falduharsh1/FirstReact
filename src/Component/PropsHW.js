import React from "react";

function PropsHW(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>   
      <p>Country: {props.country}</p>
    </div>
  );
}

function App() {
    return (
      <div>
        <PropsHW name="Harsh" age={18} country="India" />
        <PropsHW name="Tirth" age={19} country="USA" />
      </div>
    );
  }

  export default App;

