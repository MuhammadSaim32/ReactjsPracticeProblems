import React, { useEffect, useState } from "react";

function Swith() {

    const [Value, setValue] = useState(false);



    return (

        <>
            <input type="checkbox" checked={Value} onChange={() => setValue(!Value)}
            />
            <h1>
                {Value ? "ON" : "OF"}
            </h1>
        </>
    )
}

export default List;
