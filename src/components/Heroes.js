import React, { useState, useEffect } from 'react'; 
import Diabla from '../assets/images/hellion.png'
import AsaltaTumbas from '../assets/images/grave.png'
import Bufon from '../assets/images/jester.png'
import HeroesFragment from './Fragments/HeroesFrament'
import BotonFragment from './Fragments/BotonFragment';

const Heroes = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Darkes Dungeon: Clases</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <HeroesFragment
                            imagen={Diabla}
                            titulo="Diabla"
                            descripcion="El temible Hellion trae una poderosa alabarda a la batalla, alcanzando para derramar la sangre de los enemigos en cualquier posición."
                            comentario="La ira y el salvajismo implacable lo convierten en un poderosa aliada."
                        />
                    </div>
                    <div className='col-4'>
                        <HeroesFragment
                            imagen={AsaltaTumbas}
                            titulo="Asalta tumbas"
                            descripcion="La asalta tumbas tiene numerosas dagas arrojadizas y otros trucos a su disposición para enfrentarse a cualquier tipo de monstruo."
                            comentario="Para aquellos con buen ojo, el oro brilla como la punta de una daga."
                        />
                    </div>
                    <div className='col-4'>
                        <HeroesFragment
                            imagen={Bufon}
                            titulo="Bufón"
                            descripcion="Nadie salta por el campo de batalla como el Bufón, alternando las notas de su laúd con la sinfonía de sangre de su daga y su hoz."
                            comentario="Todavía se reirá... al final."
                        />
                    </div>
                </div>
            </div>
            <div className='centrar'>
                <BotonFragment
                    contenido="Mas información"
                />
            </div>
        </>
    )
}

export default Heroes