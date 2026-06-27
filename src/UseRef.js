import{useState} from 'react';
import { useRef } from "react";


function Timer(){
    const [count, setCount] = useState(0);
    const timeref = useRef();
    const handleStartButton = () => {
        if(timeref.current)
            return;
        timeref.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
        
    }
    const handleStopButton = () => {
        console.log(timeref)
        clearInterval(timeref.current);
        timeref.current = null;
    }

    const inputref = useRef();
    const handleFocusInput = () => {
        inputref.current.focus();
    }
    return(
        <>
            <div>
                <h3>Counter</h3>
                {count}
                <div>
                    <button onClick={handleStartButton}>Start</button>
                    <button onClick={handleStopButton}>stop</button>
                </div>
            </div>
            <div>
                <h3>Input Focus</h3>
                <input ref = {inputref} placeholder='enter..'></input>
                <button onClick={handleFocusInput}>Focus Input</button>
            </div>
            
        </>
    )
}

export default Timer;