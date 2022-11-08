import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipeByName } from '../../../redux/actions';

export const SearchRecipe = () => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Buscando ${search}`)
        if (search) {
            dispatch( getRecipeByName( search ) );
        }
        setSearch('');
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
