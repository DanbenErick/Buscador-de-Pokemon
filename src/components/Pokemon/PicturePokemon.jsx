import React from 'react'

const PicturePokemon = ({ name, image, error }) => {
    if(name && image && !error) {
        return (
            <div className="container__pokemon">
                <h1>El pokemon elegido es: <span>{name}</span></h1>
                <img src={ image } />
            </div>
        )
    }
    if(error) {
        return (
            <div className="pokemon__error">
                <h1>Pokemon no encontrado</h1>
            </div>
        )
    }
    return null
}

export default PicturePokemon