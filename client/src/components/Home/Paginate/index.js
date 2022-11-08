import React from 'react'

export const Paginate = ({ pageRecipes, recipes, pags }) => {
    const numPages = [];
    for (let i = 1; i <= Math.ceil( recipes/pageRecipes ); i++) {
        numPages.push(i);        
    }
    return (
        <ul>
            {
                numPages && numPages.map( (num, i) => (
                    <li onClick={ () => pags(num) } key={i}>
                        <button type='button'>
                            {num}
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}
