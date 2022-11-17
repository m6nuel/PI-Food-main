import React from 'react';
import { Link } from 'react-router-dom'
import style from './card.module.css';

export const Card = ({ id, image, nombre, tipoDieta, tipoPlato, resumen, nivelDeComida, pasoAPaso }) => {
  return (
    <div className={`${ style.card }`}>
        <Link className={`${ style.link }`} key={id} to={`/detail/${id}`}>
            { nombre ? <span>{ nombre }</span> : '' }
          <div className={`${ style.body }`}>
            <div className={`${ style.resumen }`}>
            { resumen ? <h5> Resumen: </h5> : '' }
              { resumen ? <span dangerouslySetInnerHTML={{ __html: resumen }} ></span> : '' }
            </div>
            <div className={`${ style.image }`}>
              { image ? <img src={ image } alt='foto'/> : '' }
            </div>
            <div className={`${ style.descrip }`}>
              { tipoDieta ? <h5>Tipo de Dieta:</h5>: ''}
              { tipoDieta ? <div className={`${ style.diet }`}> { tipoDieta }</div> : '' }
              { tipoPlato ? <h5>Tipo de Plato:</h5>: ''}
              { tipoPlato ? <div> { tipoPlato } </div>: '' }
              { nivelDeComida ? <h5>Nivel de Comida Saludable:</h5>: ''}
              { nivelDeComida ? <div> { nivelDeComida }</div> : '' }
              { pasoAPaso ? <h5>Paso a Paso:</h5>: ''}
              { pasoAPaso ? <div> { pasoAPaso }</div>: '' }
            </div>  
          </div>    
        </Link>
   
    </div>
  )
}
