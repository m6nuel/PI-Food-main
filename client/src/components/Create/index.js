import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createRecipe } from '../../redux/actions';
import style from './form.module.css';

export const Create = () => {
  
  const dispatch = useDispatch();
  const { diets } = useSelector( state => state )

  const [form, setForm] = useState({
    nombre: '',
    resumen: '',
    nivelDeComida: '',
    pasoAPaso: '',
    dieta: []
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSelect = (e) => {
    setForm({
      ...form,
      dieta: [ ...form.dieta, e.target.value ]
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Receta Creada');
    console.log(form)
    dispatch( createRecipe(form) );
    setForm({
      nombre: '',
      resumen: '',
      nivelDeComida: '',
      pasoAPaso: '',
      dieta: []
    })
  }

  return (
    <div className={`${ style.content }`}>
      <form className={`${ style.form }`} id='form' onSubmit={ handleSubmit }>
      <h3>Nueva Receta</h3>

        <div className={`${ style.form_item }`}>
          <input type='text' value={form.nombre} name='nombre' onChange={ handleChange } required/>
          <label> Nombre de la Receta: </label>
          <div></div>
        </div>

        <div className={`${ style.form_item }`}>
          <input type='text' value={  form.resumen } name='resumen' onChange={ handleChange } required/>
          <label> Resumen del Plato: </label>
          <div></div>
        </div>

        <div className={`${ style.form_item }`}>
          <input type='text' value={  form.nivelDeComida } name='nivelDeComida' onChange={ handleChange } required/>
          <label> Nivel de comida: </label>
          <div></div>
        </div>

        <div className={`${ style.form_item }`}>
          <input type='text' value={  form.pasoAPaso } name='pasoAPaso' onChange={ handleChange } required/>
          <label> Paso a Paso: </label>
          <div></div>
        </div>

        <div>
          <select name='dieta' defaultValue='diet' onChange={ handleSelect }>
            <option disabled value='diet' >
              Seleccionar Dietas
            </option>
            {
              diets.map( dieta => (
                <option key={ dieta.id } value={ dieta.nombre } >{ dieta.nombre }</option>
              ))
            }
          </select>
        </div>

        <div>
          {
            form.dieta?.map( (diet, i) => (
              <div key={ i } > { diet } </div>
            ))
          }
        </div>

        <button type='submit' form='form' >Crear Recera</button>
      </form>
    </div>
  )
}
