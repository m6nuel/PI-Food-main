import React from 'react';
import { Link } from 'react-router-dom';

export const CreateRecipe = () => {
  return (
    <button>
        <Link to={'/create'}>
            Crear Receta
        </Link>
    </button>
  )
}
