import React from "react";

function List() {

    let list = [1, 2, 3, 4, 5]
    return (
        <>
            <ul>
                {list.map((val, index) => (
                    <li key={index}>Items : {val}</li> // here we use index as key to make difference between li tags
                ))}
            </ul>
        </>

    )

}

export default List;
