import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllDiets, getAllRecipes } from '../../redux/actions';

export const LandingPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllRecipes());
        dispatch(getAllDiets());
    }, [dispatch])
    

    return (
        <div>LandingPage</div>
    )
}
