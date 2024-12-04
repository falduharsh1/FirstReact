import React, { useState } from 'react'

export default function Quiz() {

    const [quiz , SetQuiz] = useState([
        {
            Question : "1. What does HTML stand for?",
            Options : ["Hyper Text Markup Language","High Tech Markup Language",
                        "Hyperlink Text Markup Language","Home Tool Markup Language"],
            Answer : "Hyper Text Markup Language"  
        },
        {
            Question : "2. Which technology is primarily responsible for the styling of web pages?",
            Options : ["JavaScript"," HTML","CSS","JAVA"],
            Answer : "CSS" 
        },
        {
            Question : "3. Which programming language is mainly used for adding interactivity to websites?",
            Options : ["CSS"," C","JavaScript","C++"],
            Answer : "JavaScript" 
        },
        {
            Question : "4. Which HTML tag is used to create a hyperlink?",
            Options : ["{a}","{link}","{h1}","{p}"],
            Answer : "{a}" 
        },
        {
            Question : "5. Which of the following is a popular front-end development framework maintained by Google?",
            Options : ["React","Angular","Vue.js","Django"],
            Answer : "Angular" 
        }
                
    ])

    console.log(quiz);

    const [selectedOptions, setSelectedOptions] = useState({});
    const [Count , setCount] = useState(0)
    const [Answer ,setAnswer] = useState(null)

    const handle_Next = () => {
        if(Count < quiz.length - 1 ){
            setCount(Count + 1)
        }
    }

    const handle_Previous = () => {
        if(Count > 0){
            setCount(Count - 1)
        }
    }

    const HanldeAnsChange = (e) => {
        const selecyANS = e.target.value;
        console.log(selecyANS);
        setSelectedOptions({
            ...selectedOptions,
            [Count] : selecyANS
        })
    }

    const handleSubmit = () => {
        
    }
    
  return (
    <>
    
        <p id='Quiz_Que'>{quiz[Count].Question}</p> 
        <input type='radio' name='options' value={quiz[Count].Options[0]} checked={selectedOptions[Count] === quiz[Count].Options[0]} onChange={HanldeAnsChange}/>
           <lable>{quiz[Count].Options[0]}</lable>
        <br></br>
        <input type='radio' name='options' value={quiz[Count].Options[1]} checked={selectedOptions[Count] === quiz[Count].Options[1]} onChange={HanldeAnsChange}/>   
            <lable>{quiz[Count].Options[1]}</lable>
        <br></br>
        <input type='radio' name='options' value={quiz[Count].Options[2]} checked={selectedOptions[Count] === quiz[Count].Options[2]} onChange={HanldeAnsChange}/>
            <lable>{quiz[Count].Options[2]}</lable>
        <br></br>
        <input type='radio' name='options' value={quiz[Count].Options[3]} checked={selectedOptions[Count] === quiz[Count].Options[3]} onChange={HanldeAnsChange}/>
            <lable>{quiz[Count].Options[3]}</lable>
        <br></br>
        <button onClick={handle_Next} disabled={Count === quiz.length - 1} id='que_Next'>Next Question</button>
        <button onClick={handle_Previous} disabled={Count === 0} id='que_Prev'>Previous Question</button>

        <br></br>
        <input type='submit' id='submit' onClick={handleSubmit}></input>
    </>
    
  )
}
