import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from "react"

function App() {
    const [ name, setName ] = useState("Sofia")

    return(
        <div>
            <h1>Teacher Name: {name}</h1>
            <ul>
                <button onClick={() => setName("Data")}><li>Data</li></button>
                <button onClick={() => setName("Reyes")}><li>Reyes</li></button>
                <button onClick={() => setName("Yolanda")}><li>Yolanda</li></button>
            </ul>
        </div>
    )
}

function ChangeName() {
    const [ name, setName ] = useState("Sofia")
    const [ newName, setNewName ] = useState("") 

    const CambiarNombre = (e) => {
        e.preventDefault()
        setName(newName)
    }

    return(
        <div>
            <h1>Teacher Name: {name}</h1>
            <form onSubmit={CambiarNombre}>
                <input type="text" value={newName} onChange={(evento) => setNewName(evento.target.value)} placeholder='Add a Name'/>
                <button type="submit">Add Name</button>
            </form>
        </div>
    )
}

export { App, ChangeName }
