import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';

const App = () => {
  const ADC_ID = '8251408d';
  const ADC_KEY = 'af44894bee264edd82d2f1da7ae558a5';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://www.edamam.com/results/recipes/?search=${query}&app_id=${ADC_ID}&app_key=${ADC_KEY}`);
    const data = await response.data;
    setRecipes(data.hits);

  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className='bg-slate-400 h-screen w-full '>
      <form onSubmit={getSearch}>
        <input 
          className=''
          value={search}
          onChange={updateSearch}
        />
        <button type='submit'>
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe 
          key={recipe.recipe.lable}
          title={recipe.recipe.lable}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
