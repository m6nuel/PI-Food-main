import React/*, { useEffect }*/ from 'react'
// import { useDispatch } from 'react-redux'
// import { getAllDiets, getAllRecipes } from '../../redux/actions';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    // Mientras hago el diseño para no consumir el limite diario de la API
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAllRecipes());
    //     dispatch(getAllDiets());
    // }, [dispatch])
    

    return (
        <div>
            <Link to='/home'>
                <button>
                    A Cocinar
                </button>
            </Link>
        </div>
    )
}
