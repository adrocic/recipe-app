import React from 'react'
import style from './RecipeCard.module.css'

const RecipeCard = ({title, calories, image}) => {
    return (
        <div className={style.recipeCard}>
            <h1>{title}</h1>
            <p>Calories: {Math.floor(calories)}</p>
            <img src={image} alt=""/>
        </div>
    )
}

export default RecipeCard
