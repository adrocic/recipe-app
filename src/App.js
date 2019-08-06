import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

function App() {
  
  const APP_ID = 'c217f526';
  const APP_KEY = '2c3894ed312b2e9165860f51dc363136';
  
  
  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState("");
  const[query, setQuery] = useState('chicken');
  
  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const filterSearch = (e) => {
    setSearch(e.target.value);
  }

  const updateSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
    <h1 className="title">Recipe Cards</h1>
    {/* Form */}
      <form onSubmit={updateSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={filterSearch}
          placeholder="Search delicious recipes..." />
      </form>
    {/* List of Recipes */}
      <div className="recipes">
        {recipes.map( (recipe, index) => (
          <Recipe 
            key={recipe.recipe.label + index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
