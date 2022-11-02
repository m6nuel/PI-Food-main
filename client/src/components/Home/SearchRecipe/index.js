import React, { useState } from 'react'

export const SearchRecipe = () => {

    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Buscando ${search}`)
    }

  return (
    <div>
        <input type='text' onChange={ handleChange } placeholder='Buscar receta' />
        <button type='submit' onClick={ handleSubmit }>
            Buscar
        </button>
    </div>
  )
}
