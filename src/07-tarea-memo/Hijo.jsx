import React, { memo } from 'react'

export const Hijo = memo( ({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');
    console.log(numero);

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
