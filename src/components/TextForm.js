import React ,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase","success");

    }

    const handleClearClick=()=>{
        let newtext="";
        setText(newtext)
        props.showAlert("Clear Text","success");

    }

    const handleEmailExtract=()=>{
        const regex=/[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const foundEmails = text.match(regex) || [];
        setEmails(foundEmails);
        props.showAlert("Extraxt Email","success");


    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleCopy=()=>{
        // console.log("I am a Copy");
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy text","success");

    }

    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success");

    }

    const [text,setText]=useState("");
    const [emails, setEmails] = useState([]);
    const wordCount = text.split(" ").filter(word => word.length > 0).length;


    // setText("New text");
  return (
    <>    
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? props.themeColor : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary m-3" onClick={handleUpClick} >Convert to upper</button> 
        <button className="btn btn-info m-3" onClick={handleLoClick}>Convert to lower</button>
        <button className="btn btn-warning m-3" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-success m-2" onClick={handleEmailExtract}>Extract Emails</button>
        <button className="btn btn-danger m-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-secondary m-2" onClick={handleExtraSpace}>Remove Extra Space</button>



    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Your Text Summary</h1>
        <p className="border border-dark">{wordCount} words and{text.length} characters</p>
        <p className="border border-dark">{0.008 * wordCount}Minutes read</p>
        
        <h2>Extract Email</h2>
        {emails.length > 0 ? (
                    <ul className="border border-dark p-2">
                        {emails.map((email, index) => (
                            <li key={index}>{email}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="border border-dark p-2">No emails found</p>
                )}
        <h2>Preview</h2>
        <p className="border border-dark">{text.length>0?text:"Enter something to preview it here"}</p>
        

    </div>
    </>

  )
}
