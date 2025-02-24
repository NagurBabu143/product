import { useState } from "react"
import Grand from "./grand";

function Child (){
    const [count,setCount]=useState(0);
    const [message,setMessage]=useState("welcome to count")

    const Increment =() => {
        if(count<20){
            const newcount=count+2
            setCount(newcount)
            setMessage(`count increment to ${newcount}`);
        }
    }
    const decrement=()=>{
        if(count>0){
            const newCount=count-2;
            setCount(newCount);
            setMessage(`count Decrement to ${newCount}` )
        }
    }
    const reset = ()=>{
        setCount(0);
        setMessage("count reset");
    }
    return(
        <div>
            <button onClick={Increment} disabled={count>=20}>Increment</button>
            <button onClick={decrement} disabled={count<=0}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <Grand count={count} message={message}/>

        </div>
    )
}
export default Child