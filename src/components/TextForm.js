import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const no_of_words=()=>{
    if(text==""){
      document.getElementById('words').innerHTML="0";
    }
    
  }

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
          <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
      </div>
      <div className='container my-3'>
        <h1>Your text summary</h1>
        <p id="words"> words and {text.length} characters </p>
        <p>{text.split(" ").length * 0.08} minutes are required to read this text </p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text: "Enter your text to preview here!"}</p>
      </div>
    </>
  )
}
