import React from 'react';

export const Card = ({ id, image, nombre, tipoDieta, tipoPlato, resumen, nivelDeComida, pasoAPaso }) => {
  return (
    <div>        
      { image ? <img src={ image } alt='foto'/> : '' }
      { nombre ? <h4>Nombre: { nombre }</h4> : '' }
      { tipoDieta ? <h5>Tipo de Dieta: { tipoDieta }</h5> : '' }
      { tipoPlato ? <h5>Tipo de Plato: { tipoPlato }</h5>: '' }
      { resumen ? <h5>resumen: { resumen }</h5> : '' }
      { nivelDeComida ? <h5>Nivel de Comida Saludable: { nivelDeComida }</h5> : '' }
      { pasoAPaso ? <h5>Paso a Paso: { pasoAPaso }</h5>: '' }
    </div>
  )
}
