import { useState } from "react";

export default function PokemosCar( { id,name,sprites=[] } ) {
    
    return (
        <section style={{height:200}}>
            <h1 className="text-capitalize">#{id} - {name} </h1>

            {
                sprites.map(s=>{
                    
                    return <img src={s} alt="name" key={s}/>
                })
            }
        </section>
        
    )
}
