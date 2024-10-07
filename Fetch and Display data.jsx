import React, { useEffect, useState } from "react";

function Fetch() {

    const [Value, setValue] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((res) => setValue(res))
    }, [])

    return Value ? (<>
        {Value.map((item) => (
            <div key={item.id}> {item.id} : {item.title}</div>
        ))}

    </>
    ) : (<>
        Loading...</>)
}

export default Fetch;