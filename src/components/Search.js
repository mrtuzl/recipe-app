import { useState } from "react";


const Search = (props) => {

    return(
       <>
      <ul>
       <div className="container">
        <div className="row">

        {props.categoryMeals.length > 0 ? (
          props.categoryMeals.map((ctrMeal) => (
            <div className="col-lg-2 col-md-5 col-sm-6 col-12 m-4 p-2">
              <div className="card" onClick={() => {props.setSelectedMeal(ctrMeal.name)}}>
                <img src={ctrMeal.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">  <li key={ctrMeal.id}>{ctrMeal.name}</li> </h5>
                </div>
              </div>
            </div>
          ))
            ) : (
            props.categories.map((category) => (
              <div className="col-lg-2 col-md-5 col-sm-6 col-12 m-4 p-2">
                <div className="card" onClick={() => {props.setSelectedCategory(category.name)}}>
                  <img src={category.img} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">  <li key={category.id}>{category.name}</li> </h5>
                    <p className="card-text "> <li key={category.id}> {category.description}</li></p>
                  </div>
                </div>
              </div>
            ))
          )}



        </div>
        <div className="row"> 
        <h1> asdasd</h1>
        </div>
       </div>
      </ul>
       </>
    );
}

export default Search; 
