import React,{useState} from "react";

const Task =()=>{
    const[text, setText] = useState("Hello, NagurBabu");
    const Change=()=>{
        setText(text =="Hello, Nagur" ? "clicked on button!":"Hello Babu")
    }

    return(
        <div>
            <p>{text}</p>
            <button onClick={Change}>Change </button>
        </div>
    )
}
 export default Task