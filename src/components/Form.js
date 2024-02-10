import React, { useState } from 'react'

// console.log( useState('Enter Text Here'))

export default function Form(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was click");
    let newText=text.toLocaleUpperCase();
    setText(newText)
  }
  
  const handleLoClick=()=>{
    // console.log("Uppercase was click");
    let newText=text.toLocaleLowerCase();
    setText(newText)
  }
  const handleClearClick=()=>{
    // console.log("Uppercase was click");
    let newText=' ';
    setText(newText)
  }

  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter Text Here');
  // setText("PratikGhodakiya");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-4" >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>

    </div>
    </>
  )
}
