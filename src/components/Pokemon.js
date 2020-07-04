import React from 'react'
import Header from './Header/Header'
import { Route } from 'react-router-dom'
import Home from './Pokemon/Home.jsx'
import SearchPokemonForId from './Pokemon/SearchPokemonForId.jsx'
import SearchPokemonForName from './Pokemon/SearchPokemonForName.jsx'

const Pokemon = () => (
    <div>
        <Header />
        <Route exact strict path="/" component={Home} />
        <Route exact strict path="/searchForId" component={SearchPokemonForId} />
        <Route exact strict path="/searchForName" component={SearchPokemonForName} />
        {/* <SearchPokemon /> */}
    </div>
)

export default Pokemon

