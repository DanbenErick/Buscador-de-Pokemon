import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Pokemon from './components/Pokemon'
const App = () => (
    <div>
        <BrowserRouter>
            <Pokemon />
        </BrowserRouter>
    </div>
)
export default App