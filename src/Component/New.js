import React, { useCallback, useMemo, useState } from "react";
const New = () => {
    console.log("New !!")
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);

    const check = useMemo(() => {
        console.log("check")
        return count % 2 === 0
    }, [count])

    const incrementCont = () => {
        setCount(count + 1)
    }
    const incrementItem = () => {
        setItem(item + 1)
    }

    return (
        <>
            <button onClick={incrementCont} className="mx-3 btn btn-outline-secondary btn-sm" >incrementCount - {count}</button>
            <span> {check ? 'Even' : 'Odd'}</span>
            {/* <p>{check}</p> */}
            <button onClick={incrementItem} className="mx-3 btn btn-outline-secondary btn-sm">incrementItem - {item}</button>
        </>
    );
}
export default React.memo(New);