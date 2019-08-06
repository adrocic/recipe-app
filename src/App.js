import React, {useEffect, useState} from 'react';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails'

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
    <Router>
      <div className="App">
        <Link style={{ textDecoration: 'none' }} to='/'><h1 className="title">Recipe Cards</h1></Link>
        
        {/* Searchbar form */}
        <form onSubmit={updateSearch} className="search-form">
          <input 
            className="search-bar" 
            type="text" 
            value={search} 
            onChange={filterSearch}
            placeholder="Search delicious recipes..." />
        </form>
        
        <Switch>
          <Route 
            path="/" 
            exact
            render={(props) => <RecipeList {...props} recipes = {recipes}/>}
          />
          <Route 
            path="/:recipeName"
            render={(props) => <RecipeDetails {...props} recipes = {recipes}/>}
          />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
