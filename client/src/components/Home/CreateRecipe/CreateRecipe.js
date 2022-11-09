import React from 'react';
import { Link } from 'react-router-dom';

export const CreateRecipe = () => {
  return (
    <div>
      <button>
          <Link to={'/create'}>
              Crear Receta
          </Link>
      </button>
    </div>
  )
}
