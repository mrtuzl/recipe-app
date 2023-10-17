import React, { Component, useState } from 'react';

const Search = () => {

    const [search, setSearch] = useState(null);
    const [meals, setMeals] = useState("");
    const [mealsImg, setMealsImg] = useState("");
    
   
    const api = {
        base: "https://www.themealdb.com/api/json/v1/1/search.php",
      }

    const searchClick = () => {

        fetch(`${api.base}?s=${search}`)
        .then((res) => res.json())
        .then((result) => {
            setMeals(result.meals[0].strMeal);
            setMealsImg(result.meals[0].strMealThumb);
            console.log(result)
        });
      };

      console.log(meals);

    return(
       <>
        <div className='search d-flex flex-column'>
                <form> 
                        <input type='text' name='text' onChange={(e) => {setSearch(e.target.value)}}/>
                    </form>
                
                    <button onClick={searchClick} className='btn btn-primary'> ara </button>

                    <p>{meals} </p>
                    <img src={mealsImg} alt=''/>
             </div>
       </>
    );
}

export default Search; 