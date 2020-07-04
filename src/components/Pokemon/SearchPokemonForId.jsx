import React, { useState } from 'react'
import PicturePokemon from './PicturePokemon.jsx'
import axios from 'axios'
const SearchPokemonForId = () => {
    const [ pokemon, setPokemon ] = useState({
        id: '',
        name: '',
        image: '',
        error: false
    })
    const idPokemon = (event) => {
        setPokemon({
            id: event.target.value,
            name: pokemon.name || '',
            image: pokemon.image || '',
            error: pokemon.error || ''
        })
    }
    const buscarPokemon = () => {
        try {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
                .then(({data}) => {
                    setPokemon({
                        id: pokemon.id,
                        name: data.species.name,
                        image: data.sprites.front_default,
                        error: false
                    })
                })
                .catch(err => {
                    setPokemon({
                        id: pokemon.id,
                        error: true
                    })
                })
        }catch (error){
            console.log('ingreso aqui')
            
        }
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

export default SearchPokemonForId