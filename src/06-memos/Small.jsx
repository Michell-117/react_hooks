import { memo } from "react"



export const Small = memo( ( { value } ) => {
    console.log('memo');
    return (
        <small>{value}</small>
    )
} )



