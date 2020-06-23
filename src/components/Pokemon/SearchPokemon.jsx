import React, { setState } from 'react'

const SearchPokemon = () => {
    const buscarPokemon = () => {
        alert("Buscando Pokemon....")
    }
    return (
        <div className="searchPokemon">
            <label>Busca a tu Pokemon</label>
            <input placeholder="ID Pokemon" type="number"/>
            <button onClick={ buscarPokemon }>Buscar Pokemon</button>
        </div>
    )
}

export default SearchPokemon