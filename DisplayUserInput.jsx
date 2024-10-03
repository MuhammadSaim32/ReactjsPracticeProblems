import React, { useState } from "react";

function Display() {

    const [value, setValue] = useState('')

    return (
        <>
            <input type="text" placeholder="InputSomeValue" value={value} onChange={(e) => setValue(e.target.value)} />
            <h1>The value Enter by user is  : {value}</h1>
        </>

    )

}

export default Display;
