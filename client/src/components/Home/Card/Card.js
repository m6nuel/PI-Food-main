import React from 'react';

export const Card = ({ id, image, nombre, tipoDieta, resumen }) => {
  return (
    <div>        
      <img src={ image } alt='foto'/>
      <h4>Nombre: { nombre }</h4>
      <h5>Tipo de Dieta: { tipoDieta }</h5>
      { resumen ? <span>resumen: ({ resumen })</span> : '' }
    </div>
  )
}
