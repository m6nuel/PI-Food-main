import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../Home/Card/Card';
import { getRecipebyId } from '../../redux/actions';
import style from './Detail.module.css';
import { Link } from 'react-router-dom'

export const Detail = () => {
  let {id} = useParams();
  let dispatch = useDispatch();
  const { detail } = useSelector( state => state );

  
  useEffect(() => {
    dispatch(getRecipebyId(id))
  }, [dispatch, id])
  

  return (
    <>
    {
      detail.nombre
      ?
      <div className={`${ style.det }`}>
        <Card
          key={detail.id}
          image={ detail.imagen }
          nombre={ detail.nombre }
          tipoDieta={ detail.tipoDieta }
          tipoPlato={ detail.tipoPlato }
          resumen={ detail.resumen }
          nivelDeComida={ detail.nivelDeComida }
          pasoAPaso={ detail.pasoAPaso }
          />
            <Link to='/home'>
          <button className={`${ style.volver }`}>
              Volver
          </button>
            </Link>
      </div>
      :
      <div>Cargando</div>
    }
    </>
  )
}
