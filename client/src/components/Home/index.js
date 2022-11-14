import React, { useState } from 'react'
import { Card } from './Card/Card'
import { SearchRecipe } from './SearchRecipe'
import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import { CreateRecipe } from './CreateRecipe/CreateRecipe'
import { Paginate } from './Paginate'
import { DietFilter } from './DietFilter'
import { OrdeAlpha } from './OrdeAlpha'
import { HealthScore } from './HealthScore'
import style from './Home.module.css'

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
    <div className={`${ style.home }`}>
      
      <div className={`${ style.head }`}>
        <div className={`${ style.create }`}>
          <CreateRecipe />
        </div>
        <div>
          <SearchRecipe />
        </div>
      </div>      
      
      <div className={`${ style.filtros }`}>
        <div className={`${ style.filtro }`}>
          <DietFilter />
        </div>
        <div className={`${ style.filtro }`}>
          <OrdeAlpha />
        </div>
        <div className={`${ style.filtro }`}>
          <HealthScore />
        </div>
      </div>
      
      <div className={`${ style.recipes }`}>
        {
          recipesPage?.map( (recipe, i) => {
            return (
              // <Link key={i} to={`/detail/${recipe.id}`} className={`${ style.link }`}>
                <Card 
                  key={i}
                  id={ recipe.id }
                  image={ recipe.imagen }
                  nombre={ recipe.nombre }
                  tipoDieta={ recipe.tipoDieta }     
                  />
              // </Link>
            )
          })
        }
      </div>
      <div className={`${ style.paginate }`}>
        <Paginate pageRecipes={ pageRecipes } recipes={ recipes.length } pags={ pags } />
        {/* <div>Creado por <span>©&nbsp;</span> Jesus Delgado - 2022</div> */}
      </div>
    </div>
  )
}
