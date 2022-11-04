import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Create = () => {

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
  }

  return (
    <>
      <form id='form' onSubmit={ handleSubmit }>
      <h3>Nueva Receta</h3>

        <div>
          <input type='text' value={form.nombre} name='nombre' onChange={ handleChange }/>
          <label> Nombre de la Receta: </label>
        </div>

        <div>
          <input type='text' value={  form.resumen } name='resumen' onChange={ handleChange }/>
          <label> Resumen del Plato: </label>
        </div>

        <div>
          <input type='text' value={  form.nivelDeComida } name='nivelDeComida' onChange={ handleChange }/>
          <label> Nivel de comida: </label>
        </div>

        <div>
          <input type='text' value={  form.pasoAPaso } name='pasoAPaso' onChange={ handleChange }/>
          <label> Paso a Paso: </label>
        </div>

        <div>
          <label> Seleccionar Dietas: </label>
          <select name='dieta' onChange={ handleSelect }>
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
    </>
  )
}
