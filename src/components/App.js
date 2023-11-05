import React, { Component, useEffect, useState } from 'react';
import Search from './Search.js';
import img from "../img/carousel3.jpg";
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import '../scss/styles.scss'
import { BsSearch } from "react-icons/bs";
import {Link as ScrollLink } from 'react-scroll';

const App = () => {

    const [search, setSearch] = useState("");
    const [searchMeals, setSearchMeals] = useState([]);
    const [categories, setCategories] = useState([]);
    const [fetchData, setFetchData] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categoryMeals, setCategoryMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState("");
    const [meal, setMeal] = useState([]);

    const mealApi = "https://www.themealdb.com/api/json/v1/1/search.php";
    const categoryApi = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const ctrFilter = "https://www.themealdb.com/api/json/v1/1/filter.php"
    const randomApi = "https://www.themealdb.com/api/json/v1/1/random.php";

    useEffect(() => {
      
        fetch(`${mealApi}?s=${selectedMeal}`)
          .then((res) => res.json())
          .then((result) => {
            const processedMeal = result.meals.map(item => ({
                id: item.idMeal,
                name: item.strMeal,
                category: item.strCategory,
                nationality: item.strArea,
                instruction: item.strInstructions,
                img: item.strMealThumb,
                tags: item.strTags,
                ingredients: [
                     item.strIngredient1, item.strIngredient2, item.strIngredient3, item.strIngredient4, item.strIngredient5,
                     item.strIngredient6, item.strIngredient7, item.strIngredient8, item.strIngredient9, item.strIngredient10,
                     item.strIngredient11,item.strIngredient12,item.strIngredient13,item.strIngredient14,item.strIngredient15,
                     item.strIngredient16,item.strIngredient17,item.strIngredient18,item.strIngredient19,item.strIngredient20
                  ],
                measures: [
                     item.strMeasure1, item.strMeasure2, item.strMeasure3, item.strMeasure4, item.strMeasure5,
                     item.strMeasure6, item.strMeasure7, item.strMeasure8, item.strMeasure9, item.strMeasure10,
                     item.strMeasure11,item.strMeasure12,item.strMeasure13,item.strMeasure14,item.strMeasure15,
                     item.strMeasure16,item.strMeasure17,item.strMeasure18,item.strMeasure19,item.strMeasure20
                ]
              }));
          setMeal(processedMeal);
          setFetchData(false);
        });
    }, [selectedMeal]);


    useEffect(() => {
      
          fetch(`${ctrFilter}?c=${selectedCategory}`)
            .then((res) => res.json())
            .then((result) => {
              const processedCategory = result.meals.map(item => ({
                name: item.strMeal,
                img: item.strMealThumb,
                id: item.idMeal
              }));
              setCategoryMeals(processedCategory);
              setFetchData(false);
            })
            .catch((error) => {
              console.error("Fetch Hatası:", error);
            });
        
      }, [selectedCategory]);


    useEffect(() => {

        if (fetchData) {
          fetch(categoryApi)
            .then((res) => res.json())
            .then((result) => {
                const processedCategories = result.categories.map(item => ({
                    id: item.idCategory,
                    name: item.strCategory,
                    img: item.strCategoryThumb,
                    description: item.strCategoryDescription
                  }));
                  setCategories(processedCategories);
                  setFetchData(false);
            });

        }
      }, [fetchData]);

      useEffect(() => {

        if (fetchData) {
          fetch(`${mealApi}?s=${search}`)
            .then((res) => res.json())
            .then((result) => {
              const processedSearchMeals = result.meals.map(item => ({
                id: item.idMeal,
                name: item.strMeal,
                category: item.strCategory,
                img: item.strMealThumb,
                nationality: item.strArea
              }));
                setSearchMeals(processedSearchMeals);
                setFetchData(false);
            }).catch((error) => {
              console.error("Fetch Hatası:", error);
            });
        }
            }, [fetchData]);


  const handleRandom = () => {
      
        fetch(randomApi)
          .then((res) => res.json())
          .then((result) => {
            const processedMeal = result.meals.map(item => ({
              id: item.idMeal,
              name: item.strMeal,
              category: item.strCategory,
              nationality: item.strArea,
              instruction: item.strInstructions,
              img: item.strMealThumb,
              tags: item.strTags,
              ingredients: [
                   item.strIngredient1, item.strIngredient2, item.strIngredient3, item.strIngredient4, item.strIngredient5,
                   item.strIngredient6, item.strIngredient7, item.strIngredient8, item.strIngredient9, item.strIngredient10,
                   item.strIngredient11,item.strIngredient12,item.strIngredient13,item.strIngredient14,item.strIngredient15,
                   item.strIngredient16,item.strIngredient17,item.strIngredient18,item.strIngredient19,item.strIngredient20
                ],
              measures: [
                   item.strMeasure1, item.strMeasure2, item.strMeasure3, item.strMeasure4, item.strMeasure5,
                   item.strMeasure6, item.strMeasure7, item.strMeasure8, item.strMeasure9, item.strMeasure10,
                   item.strMeasure11,item.strMeasure12,item.strMeasure13,item.strMeasure14,item.strMeasure15,
                   item.strMeasure16,item.strMeasure17,item.strMeasure18,item.strMeasure19,item.strMeasure20
              ]
            }));
        setMeal(processedMeal);
        setFetchData(false);
          });
  }

  const handleFetchData = () => {
    setFetchData(!fetchData);
  };

        return (
            <> 
             <header className="header" id='home'> 
                 <Navbar/>
                   <div className="header-content d-flex align-items-center justify-content-center flex-column text-center bg-image" 
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.1)) , url(${img})` }}>
                           <h1 className="header-title ls-2 text-white fw-bold"> What are your favorite cuisines? </h1>
                           <p className="text-uppercase my-3 ls-1 text-white fw-bold"> personelize your experience </p>
                             <div className='search d-flex input-group-md'>
                                <form> 
                                   <input className="rounded-5 form-control" 
                                   placeholder="Search Food" 
                                   type='text' 
                                   name='text' 
                                   onChange={(e) => {setSearch(e.target.value)}}/>
                                </form>

                                        <ScrollLink  to="search"  
                                          aria-current="page"
                                          spyThrottle={100} 
                                          smooth={true} 
                                          offset={140} 
                                          duration={200}>  
                                        <button onClick={handleFetchData} type="button" className='btn mainColor border-1 shadow rounded-5 mx-3'> 
                                        <BsSearch/>
                                        </button>
                                        </ScrollLink>

                                        <ScrollLink  to="search"  
                                          aria-current="page"
                                          spyThrottle={100} 
                                          smooth={true} 
                                          offset={140} 
                                          duration={200}>  
                                        <button onClick={handleRandom} type="button" className='btn mainColor border-1 shadow rounded-5'> Feel Lucky!</button>
                                        </ScrollLink>
                               </div>
                    </div>
             </header>
                <Search
                id="search" 
                searchMeals={searchMeals} 
                categories={categories} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
                categoryMeals={categoryMeals} 
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                meal={meal} 
                setMeal={setMeal}
                fetchData={fetchData} />

               <Footer/>
            </>
        );
}
export default App;