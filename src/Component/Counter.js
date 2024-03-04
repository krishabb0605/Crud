import React, { useState } from "react";

const Counter = () => {
    console.log("Counter component")

    const [count, setCount] = useState(0);
    const decrement = () => {
        setCount(count - 1)
        console.log("Decrement counter")
    }
    const increment = () => {
        setCount(count + 1)
        console.log("Increment counter")
    }
    return (
        <>
            <button onClick={decrement}>Decrement</button>
            <span>{count}</span>
            <button onClick={increment}>Increment</button>
        </>
    );
}
export default React.memo(Counter);