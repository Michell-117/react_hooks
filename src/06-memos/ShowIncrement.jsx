import React from "react";

const ShowIncrement = React.memo( ({increment})  => {

    console.log(':(');

    return (
        <button
            className="btn btn-primary mt-2"
            onClick={()=>{
                increment(10)
            }}
        >
            Incrementar
        </button>
    )
})

export default ShowIncrement