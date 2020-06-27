import React from 'react'

const PicturePokemon = ({ name, image, error }) => {
    if(name && image || error) {
        return (
            <div className="container__pokemon">
                <h1>El pokemon elegido es: {name}</h1>
                <img src={ image } />
            </div>
        )
    }
    return null
}

export default PicturePokemon