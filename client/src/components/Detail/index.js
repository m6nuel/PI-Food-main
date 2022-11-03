import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../Home/Card/Card';
import { getRecipebyId } from '../../redux/actions';

export const Detail = () => {
  let {id} = useParams();
  let dispatch = useDispatch();
  const { detail } = useSelector( state => state )
  
  useEffect(() => {
    dispatch(getRecipebyId(id))
  }, [dispatch, id])
  

  return (
    <>
      <Card 
        key={detail.id}
        image={ detail.imagen }
        nombre={ detail.nombre }
        tipoDieta={ detail.tipoDieta }
        resumen={ detail.resumen }
      />
    </>
  )
}
