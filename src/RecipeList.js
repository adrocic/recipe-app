import React from 'react'
import RecipeCard from './RecipeCard'
import style from './RecipeList.module.css'
import { Link } from 'react-router-dom'

const RecipeList = (props) => {
    
     const recipes = props.recipes;
    
    return (
        <div className={style.recipeList}>
            
            {recipes.map( (recipe, index) => (
                <Link key={recipe.recipe.label + index} to={`/${recipe.recipe.label}`} style={{ textDecoration: 'none' }}>
                    <RecipeCard
                        key={recipe.recipe.label + index}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories} 
                        image={recipe.recipe.image}
                    />
                </Link>
            ))}
        
        </div>
    )
}

export default RecipeList
