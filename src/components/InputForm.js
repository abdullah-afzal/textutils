import React, {useState} from 'react'

export default function InputForm(prop) {
    const handleUppercase=()=>{
        setText(text.toUpperCase());
    }
    const handleLowercase=()=>{
      setText(text.toLowerCase());
    }
    const handleClear=()=>{
      setText("");
    }
    const capitalFirstLetter = ()=>{
      let words = text.split(" ")
     let uppercaseword = ' '
      words.forEach(element => {
         uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
      });
      setText(uppercaseword)
  }
    const onTextChange=(event)=>{
        setText(event.target.value);
    }
    const[text,setText]=useState("")
  return (
<>
<div className="mb-3 mt-4">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3>{prop.labelN}</h3></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={onTextChange}></textarea>
  <button className='btn btn-primary mt-3 mx-2' onClick={capitalFirstLetter}>Title Case</button>
  <button className='btn btn-primary mt-3 mx-2' onClick={handleUppercase}>Uppercase</button>
  <button className='btn btn-primary mt-3 mx-2' onClick={handleLowercase}>Lowercase</button>
  <button className='btn btn-primary mt-3 mx-2' onClick={handleClear}>Clear</button>
</div>
<div className="container">
  <h3>Text Summery</h3>
  <p>{text.split(" ").length} Words and {text.length} Characters ({Math.ceil(0.008 * text.split(" ").length)} Minutes Read) </p>
  <h3>Preview</h3>
  <p>{text}</p>
</div>
</>
  )
}
InputForm.defaultProps={
    labelN:"Enter Your Text Here"
};