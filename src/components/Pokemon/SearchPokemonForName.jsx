import React from 'react'
import PicturePokemon from './PicturePokemon.jsx'

function SearchPokemonForName() {
    return (
        <div className="Pokemon">
            <div className="searchPokemon">
                <label>Busca a tu Pokemon</label>
                <input placeholder="Nombre del Pokemon" type="text"/>
                <button>Buscar Pokemon</button>
            </div>
            <PicturePokemon 
                name='Daniel'
                image='Daniel'
                error='Daniel'
            />
        </div>            
    )
}

export default SearchPokemonForName

