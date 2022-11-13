import React from 'react';
import { Link } from 'react-router-dom'
import style from './card.module.css';

export const Card = ({ id, image, nombre, tipoDieta, tipoPlato, resumen, nivelDeComida, pasoAPaso }) => {
  return (
    <div className={`${ style.card }`}>
        <Link className={`${ style.link }`} key={id} to={`/detail/${id}`}>
          <div className={`${ style.image }`}>
            { image ? <img src={ image } alt='foto'/> : '' }
          </div>
          <div className={`${ style.body }`}>
            { nombre ? <h5>Nombre: { nombre }</h5> : '' }
            { tipoDieta ? <h5>Tipo de Dieta: { tipoDieta }</h5> : '' }
            { tipoPlato ? <h5>Tipo de Plato: { tipoPlato }</h5>: '' }
            { resumen ? <h5>resumen: { resumen }</h5> : '' }
            { nivelDeComida ? <h5>Nivel de Comida Saludable: { nivelDeComida }</h5> : '' }
            { pasoAPaso ? <h5>Paso a Paso: { pasoAPaso }</h5>: '' }
          </div>    
        </Link>
   
    </div>
  )
}
