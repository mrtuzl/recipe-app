import React, { Component, useEffect, useState } from 'react';
import Search from './Search.js';
import img from "../img/carousel3.jpg";
import Navbar from './Navbar.js';
import '../scss/styles.scss'
import { BsSearch } from "react-icons/bs";


const App = () => {

    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState("");
    const [categories, setCategories] = useState([]);
    const [mealsImg, setMealsImg] = useState("");
    const [fetchData, setFetchData] = useState(true);
    
   useEffect(() => {
    if (fetchData) {
        const api = {
            base: "https://www.themealdb.com/api/json/v1/1/search.php",
          }
    
          fetch(`${api.base}?s=${search}`)
          .then((res) => res.json())
          .then((result) => {
              console.log(result.meals.length)
              console.log(result)
              setMeals(result.meals[0].strMeal);
              setMealsImg(result.meals[0].strMealThumb);
              setCategories([...new Set(result.meals.map(meal => meal.strCategory))]);
              setFetchData(false)
          });
    }
  }, [fetchData]); 

  const handleFetchData = () => {
    setFetchData(!fetchData);
  };

     
        return (
            <> 
             <header className="header"> 
                 <Navbar/>
                        <div className="header-content d-flex align-items-center justify-content-center flex-column text-center bg-image" 
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.1)) , url(${img})` }}>
                        <h1 className="header-title ls-2 text-white fw-bold"> What are your favorite cuisines? </h1>
                        <p className="text-uppercase my-3 ls-1 text-white fw-bold"> personelize your experience </p>
                    <div className='search d-flex input-group-md'>
                        <form> 
                            <input className="rounded-5 form-control" placeholder="Search Food" type='text' name='text' onChange={(e) => {setSearch(e.target.value)}}/>
                        </form>
                        <button onClick={handleFetchData} type="button" className='btn btn-primary border-0 rounded-5'> 
                        <BsSearch/>
                        </button>
                        
                    </div>
                    </div>
        
             </header>

            
            <Search meals={meals} categories={categories} mealsImg={mealsImg}/>
            </>
        );

}

export default App;