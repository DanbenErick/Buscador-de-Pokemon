import React, { useState } from 'react'
import PicturePokemon from './PicturePokemon.jsx'
import axios from 'axios'


function SearchPokemonForName() {
    const [pokemon, setPokemon] = useState({
        id: null,
        name: null,
        image: null,
        error: null
    })
    
    const setPokemonName = function(event) {
        setPokemon({
            id: pokemon.id || '',
            name: pokemon.name || '',
            name_petition: event.target.value || '',
            image: pokemon.image || '',
            error: pokemon.error || ''
        })
    }

    const buscarPokemon = function() {
        const api = `https://pokeapi.co/api/v2/pokemon/${pokemon.name_petition}`
        try {
            axios.get(api)
                .then(({data}) => {
                    setPokemon({
                        id: data.id,
                        name: data.name,
                        name_petition: pokemon.name_petition,
                        image: data.sprites.front_default,
                        error: false
                    })
                    // console.log(data)
                })
        }catch(err) {
            // Captura del error
        }
    }

    return (
        <div className="Pokemon">
            <div className="searchPokemon">
                <label>Busca a tu Pokemon</label>
                <input onChange={ setPokemonName } value={ pokemon.name_petition ||'' } placeholder="Nombre del Pokemon" type="text"/>
                <button onClick={ buscarPokemon }>Buscar Pokemon</button>
            </div>
            <PicturePokemon 
                name = {pokemon.name ||''}
                image = {pokemon.image || ''}
                error = {pokemon.error || ''}
            />
        </div>            
    )
}

export default SearchPokemonForName

