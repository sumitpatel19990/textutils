import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        settext(newText)
    }
    const handleOnChange = (event)=> {
        settext(event.target.value); 
    }
    const [text, settext] = useState('Enter Text Here 2');  
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mt-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    <div className="container mt-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} charactor</p>
    </div>
    </>

  )
}
