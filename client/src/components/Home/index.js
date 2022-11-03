import React from 'react'
import { Card } from './Card/Card'
import { SearchRecipe } from './SearchRecipe'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { recipes } = useSelector( state => state )
  console.log(recipes)
  
  return (
    <>
      <SearchRecipe />
      {
        recipes?.map( (recipe, i) => {
          return (
            <Link to={`/detail/${recipe.id}`}>
              <Card 
                key={i}
                id={ recipe.id }
                image={ recipe.imagen }
                nombre={ recipe.nombre }
                tipoDieta={ recipe.tipoDieta }     
                />
            </Link>
          )
        })
      }
    </>
  )
}
