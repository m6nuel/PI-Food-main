import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createRecipe, getAllRecipes } from '../../redux/actions';
import style from './form.module.css';
import swal from 'sweetalert';

const validate = ( form ) => {
  let errors = {};
  if (!form.nombre) {
    errors.nombre = 'El nombre de la receta es Necesario'
  }
  if (!form.resumen) {
    errors.resumen = 'El Resumen de la receta es Necesario'
  }
  return errors;
}

export const Create = () => {
  
  const dispatch = useDispatch();
  const { diets } = useSelector( state => state )
  const [button, setButton] = useState(false);

  const [form, setForm] = useState({
    nombre: '',
    resumen: '',
    nivelDeComida: '',
    pasoAPaso: '',
    dieta: []
  })

  const [errors, setErrors] = useState({
    nombre: '',
    resumen: ''
  })

  useEffect(() => {
    if (form.nombre.length > 0 && form.resumen.length > 0 && form.nivelDeComida.length > 0 && form.pasoAPaso.length > 0 )
      setButton( false )
    else setButton( true )
  }, [form, setButton])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setErrors( validate({
      ...form,
      [e.target.name] : e.target.value
    }))
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
    swal("Nueva Receta", "Se ha Creado con exito la nueva receta", "success",{buttons: false})
    dispatch( getAllRecipes() );
  }

  return (
    <div className={`${ style.content }`}>
      <form className={`${ style.form }`} id='form' onSubmit={ handleSubmit }>
      <h3>Nueva Receta</h3>

        <div className={`${ style.form_item }`}>
          <input type='text' value={form.nombre} name='nombre' onChange={ handleChange } autoComplete='off' required/>
          <label> Nombre de la Receta: </label>
          <div className={`${ style.error }`}> { errors.nombre && errors.nombre } </div>
        </div>

        <div className={`${ style.form_item }`}>
          <input type='text' value={  form.resumen } name='resumen' onChange={ handleChange } autoComplete='off' required/>
          <label> Resumen del Plato: </label>
          <div className={`${ style.error }`}> { errors.resumen && errors.resumen } </div>
        </div>

        <div className={`${ style.form_item }`}>
          <input type='text' value={  form.nivelDeComida } name='nivelDeComida' onChange={ handleChange } autoComplete='off' required/>
          <label> Nivel de comida: </label>
          {/* <div className={`${ style.error }`}>nombre de la Receta</div> */}
        </div>

        <div className={`${ style.form_item }`}>
          <input type='text' value={  form.pasoAPaso } name='pasoAPaso' onChange={ handleChange } autoComplete='off' required/>
          <label> Paso a Paso: </label>
          {/* <div className={`${ style.error }`}>nombre de la Receta</div> */}
        </div>

        <div className={`${ style.form_item }`}>
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

          <div className={`${ style.dietas }`}>
            {
              form.dieta?.map( (diet, i) => (
                <div className={`${ style.diet }`} key={ i } > { diet } </div>
                ))
              }
          </div>
        </div>

        <button className={`${ style.form_boton }`} type='submit' disabled={ button } form='form' >
          Crear Receta
        </button>
      </form>
    </div>
  )
}
