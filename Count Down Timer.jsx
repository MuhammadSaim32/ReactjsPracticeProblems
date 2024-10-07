import React, { useEffect, useState } from "react";
function APP() {

    const [data, setData] = useState(60);
    useEffect(() => {
        if (data > 0) {
            const timer = setTimeout(() => setData(data - 1)
                , 1000);
        }
    }, [data])

    return (<>

        Time left : {data}
    </>)
}


export default App