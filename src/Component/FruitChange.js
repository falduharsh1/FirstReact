import React, { useState } from 'react'

export default function FruitChange() {
    const [Name, setName] = useState("Apple");
    const [Color,setColor] = useState("white")

    const handleFruit = () => {
        if(Name === 'Apple'){
            setName('Orange')
            setColor('orange')
        }else{
            setName('Apple')
            setColor('red') 
        }
    }

  return (
    <>
    <h2 style={{backgroundColor : Color}}>{Name}</h2>
    <button onClick={handleFruit}>Change Fruit</button>
    </>
  )
}
