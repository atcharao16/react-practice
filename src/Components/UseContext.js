import { useState } from "react";
import { Button } from "./Button";


function UseContextExample() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Button count = {count} setCount = {setCount}></Button>

        </>

    )
}

export default UseContextExample;