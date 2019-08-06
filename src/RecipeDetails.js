import React from 'react'
import style from './RecipeDetails.module.css'

const RecipeDetails = ({match}) => {
    

    return (
        <div className={style.recipeDetails}>
            <h1>{match.params.recipeName}</h1>
            <p>The Edamam API does not have an ID for food like it describes as needed for querying a detail list of individual dishes.</p>
            <p>The details would be displayed here though.</p>
        </div>
    )
}

export default RecipeDetails
