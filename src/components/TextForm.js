import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
     console.log("Upper case Was clicked" + text);
     let newText= text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to upper case","success");

    }
    const handleLoClick=()=>{
      console.log("Upper case Was clicked" + text);
      let newText= text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case","success");
 
     }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
   
       }
       const handleBlankClick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text Cleard","success");
       }
       const handlecopy=()=>{
         var text = document.getElementById("myBox");
         text.select();
         navigator.clipboard.writeText(text.value);
         props.showAlert("Copy to clipboard ","success");
       }
       const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed","success");
      }
    const[text,setText]=useState('Enter text here');
    //text="New text";//Wrong way to change text
    //setText=(new text);//correct way
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleBlankClick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
      <button className="btn btn-primary" onClick={handleExtraSpaces}>Extra Space Remove</button>
    
    </div>
    
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}> 
      <h2>Your text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to preview it"}</p>





    </div>
    </>
  );
}
