import React, { useState } from 'react'
import PicturePokemon from './PicturePokemon.jsx'
import axios from 'axios'
const SearchPokemon = () => {
    const [ pokemon, setPokemon ] = useState({
        id: '',
        name: '',
        image: '',
        error: false
    })
    const idPokemon = (event) => {
        setPokemon({
            id: event.target.value
        })
    }
    const buscarPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
            .then(({data}) => {
                setPokemon({
                    name: data.species.name,
                    image: data.sprites.front_default,
                    error: false
                })
                console.log(pokemon)
            })
        // console.log(respuesta)

    }
    return (
        <div className="Pokemon">
            <div className="searchPokemon">
                <label>Busca a tu Pokemon</label>
                <input onChange={ idPokemon } value={ pokemon.id } placeholder="ID Pokemon" type="number"/>
                <button onClick={ buscarPokemon }>Buscar Pokemon</button>
            </div>
            <PicturePokemon 
                name={pokemon.name}
                image={pokemon.image}
                error={pokemon.error}
            />
        </div>
    )
}

export default SearchPokemon