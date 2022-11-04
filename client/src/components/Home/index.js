import React from 'react'
import { Card } from './Card/Card'
import { SearchRecipe } from './SearchRecipe'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CreateRecipe } from './CreateRecipe/CreateRecipe'

export const Home = () => {
  const { recipes } = useSelector( state => state )
  
  return (
    <>
      <SearchRecipe />
      <CreateRecipe />
      {
        recipes?.map( (recipe, i) => {
          return (
            <Link key={i} to={`/detail/${recipe.id}`}>
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
