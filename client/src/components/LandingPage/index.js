import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { getAllDiets, getAllRecipes } from '../../redux/actions';
import { Link } from 'react-router-dom';
import style from './Landing.module.css';
import image from '../../imagenes/imagen7.jpg'

export const LandingPage = () => {
    // Mientras hago el diseño para no consumir el limite diario de la API
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAllRecipes());
    //     dispatch(getAllDiets());
    // }, [dispatch])
    

    return (
        <>
            <div className={`${ style.image }`}>
                <img src={image} alt='Foto inicio'/>
            </div>
            <div className={`${ style.button }`}>
                <Link to='/home'>
                    <button>
                        A Cocinar
                    </button>
                </Link>
            </div>
        </>
    )
}
