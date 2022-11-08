import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dietsFilter } from '../../../redux/actions';


export const DietFilter = () => {
  const dispatch = useDispatch();  
  const { diets } = useSelector( state => state )
    const handleSelect = (e) => {
        console.log( e.target.value)
        dispatch( dietsFilter(e.target.value) )
    }
  

  return (
    <div>
        <select name='dieta' defaultValue='diet' onChange={ handleSelect }>
            <option disabled value='diet' >
              filtrar por Dieta
            </option>
            {
              diets.map( dieta => (
                <option key={ dieta.id } value={ dieta.nombre } >{ dieta.nombre }</option>
              ))
            }
          </select>
    </div>
  )
}
