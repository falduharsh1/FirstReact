import React from 'react'

export default function Fees(props) {

    const FessData = {
        "Full Stack Development": "75000",
        "React JS Development": "50000",
        "Ui/Ux Development": "35000"
    }

    console.log(FessData);
    
  return (
    <>
        <div>{FessData[props.cName]}</div>
    </>
  )
}
