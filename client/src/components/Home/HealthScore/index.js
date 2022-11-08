import React from 'react'
import { useDispatch } from 'react-redux'
import { healthScore } from '../../../redux/actions';

export const HealthScore = () => {
    const dispatch = useDispatch();

    const handleSelect = (e) => {
        dispatch( healthScore( e.target.value ) )
    }

    return (
        <div>
            <select defaultValue='health' onChange={ handleSelect }>
            <option disabled value='health' >
                Orden Saludable
            </option>
            <option value='hs'>
                Muy Saludable a menos
            </option>
            <option value='sh'>
                Menos Saludable a mas
            </option>
        </select>
        </div>
    )
}
