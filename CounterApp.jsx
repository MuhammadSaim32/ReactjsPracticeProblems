
import React, { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);
    const Incre = () => {
        setValue(value + 1)
    }
    const decre = () => {
        setValue(value - 1)
    }
    return (
        <>
            <button onClick={Incre}>Increment </button>
            <h1>value : {value}</h1>

            <button onClick={decre}>decrement</button>

        </>

    )

}

export default Counter;
