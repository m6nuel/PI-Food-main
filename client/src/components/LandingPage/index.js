import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllRecipes } from '../../redux/actions';

export const LandingPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllRecipes())
    }, [dispatch])
    

    return (
        <div>LandingPage</div>
    )
}
