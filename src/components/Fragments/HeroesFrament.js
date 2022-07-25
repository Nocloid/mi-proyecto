import React, { useState, useEffect } from "react"

const HeroesFragment = ({ imagen, titulo, descripcion, comentario }) => {
    return (
        <>
            <div className="card text-bg-dark mb-3" style={{ width: "18rem" }}>
                <img src={imagen} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                </div>
                <div className="card-footer bg-transparent border-danger">
                    <div className="comillasL">“</div>
                    <div className="co">{comentario}</div>
                    <div className="comillasR">„</div>
                </div>
            </div>
        </>
    )
}

export default HeroesFragment