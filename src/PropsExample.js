import { useState } from "react";


function Increase(props){
    const {count, setCount} = props;
    function incrementClick(){
        setCount(count + 1);
    }
    return (
        <button onClick={incrementClick}>Increase</button>
    )
}

function Decrease(props){
    function decrementClick(){
        props.setCount(props.count - 1);
    }
    return (
        <button onClick={decrementClick}>Decrease</button>
    )
}
function Counter(){
    const [count, setCount] = useState(0);
    

    return(
        <>
         {/* Props are used to pass values form parent to child  
            Here count and setCount are props and we need to pass as key = {value} (Decrease, Increase are children)
         */}
        <h3>Counter</h3>
        <Decrease count= {count} setCount = {setCount} /> &nbsp;
        {count} &nbsp;
        <Increase  count= {count} setCount = {setCount}/>
        

        
        </>
    )
}

export default Counter;