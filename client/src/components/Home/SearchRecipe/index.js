import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllRecipes, getRecipeByName } from '../../../redux/actions';
import style from './Search.module.css';
import swal from 'sweetalert';

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
        console.log(search)
        if(search.data === "Receta no encontrada") {
            swal("Resultado de la busqueda", "Receta no encontrada", "warning")
            dispatch( getAllRecipes() );
        }
        setSearch('');
    }

  return (
    <div className={`${style.search}`}>
        <input type='text' onChange={ handleChange } required/>
        <label>Buscar Receta</label>
        <button type='submit' onClick={ handleSubmit }>
            Buscar
        </button>
    </div>
  )
}
