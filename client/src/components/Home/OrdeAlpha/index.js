import React from 'react'
import { useDispatch } from 'react-redux'
import { ordeAlpha } from '../../../redux/actions';

export const OrdeAlpha = () => {

    const dispatch = useDispatch();

    const handleSelect = (e) => {
        console.log('orden alfabetico')
        dispatch( ordeAlpha(e.target.value) )
    } 

  return (
    <div>
        <select defaultValue='orde' onChange={ handleSelect }>
            <option disabled value='orde' >
                Orden Alfabetico
            </option>
            <option value='az'>
                Ascendente A a la Z
            </option>
            <option value='za'>
                Descendente Z a la A
            </option>
        </select>
    </div>
  )
}
