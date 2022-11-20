import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css';
import image from '../../imagenes/imagen7.jpg'
import { getAllDiets, getAllRecipes } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export const LandingPage = () => {

    const dispatch = useDispatch();
// acomodar esto en la mañana
    const handleClick = () => {
        dispatch(getAllRecipes());
        dispatch(getAllDiets());
    }

    return (
        <>
            <div className={`${ style.image }`}>
                <img src={image} alt='Foto inicio'/>
            </div>
            <div className={`${ style.button }`}>
                <Link to='/home'>
                    <button className={`${ style.but }`} onClick={ handleClick() }>
                        A Cocinar
                    </button>
                </Link>
            </div>
        </>
    )
}
