import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/searchForId">Buscar por ID</Link></li>
                <li><Link to="/searchForName">Buscar por Nombre</Link></li>
            </ul>
        </nav>
    )
}

export default Nav