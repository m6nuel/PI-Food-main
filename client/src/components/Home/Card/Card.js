import React from 'react';
import { Link } from 'react-router-dom'

export const Card = ({ id, image, nombre, tipoDieta }) => {
  return (
    <div>        
        <Link to={`/detail/${ id }`}>
            <img src={ image } alt='foto'/>
            <h4>Nombre: { nombre }</h4>
            <h5>Tipo de Dieta: { tipoDieta }</h5>
        </Link>
    </div>
  )
}
