import React, { useEffect, useState } from "react";
function App() {
    const [bgcolor, setbgcolor] = useState('white');
    const bgch = () => {

        if (bgcolor == 'white') setbgcolor('blue');
        else setbgcolor('white')
    }

    return (<>
        <div style={{
            backgroundColor: `${bgcolor}`,
            width: '100vw',
            height: '100vh',

        }}>
            <button onClick={bgch}>Click me </button>
        </div>
    </>)
}


export default App