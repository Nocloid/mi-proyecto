import React, { useState, useEffect } from "react"

const BotonFragment = ({contenido}) => {
    return (
        <>
            <button type="button" class="btn btn-light">{contenido}</button>
        </>
    )
}

export default BotonFragment