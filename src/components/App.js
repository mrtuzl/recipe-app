import React, { Component, useState } from 'react';
import img from '../img/asdad.jpg';
import img2 from '../img/asdad2.jpg';
import '../scss/styles.scss'


const App = () => {
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
        return (
            <> 
               {/* navbar */}
             <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                     <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                    </div>
                    </div>
                </div>
             </nav>




             {/* carousel */}
             <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
    
        </div>
        <div class="carousel-item active">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
    
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
    
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>




         {/* search */}
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

export default App;