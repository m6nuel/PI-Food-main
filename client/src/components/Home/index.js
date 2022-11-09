import React, { useState } from 'react'
import { Card } from './Card/Card'
import { SearchRecipe } from './SearchRecipe'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CreateRecipe } from './CreateRecipe/CreateRecipe'
import { Paginate } from './Paginate'
import { DietFilter } from './DietFilter'
import { OrdeAlpha } from './OrdeAlpha'
import { HealthScore } from './HealthScore'

export const Home = () => {
  const { recipes } = useSelector( state => state );
  const [pag, setPag] = useState(1);
  const pageRecipes = 9;
  const lastIndex = pag * pageRecipes;
  const firstIndex = lastIndex - pageRecipes;
  const recipesPage = recipes.slice( firstIndex, lastIndex);
  const pags = (num) => {
    return setPag(num)
  }
  
  return (
    <>
      <SearchRecipe />
      <CreateRecipe />
      <DietFilter />
      <OrdeAlpha />
      <HealthScore />
      <div>
        {
          recipesPage?.map( (recipe, i) => {
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
      </div>
      <Paginate pageRecipes={ pageRecipes } recipes={ recipes.length } pags={ pags } />
    </>
  )
}
