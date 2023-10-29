
const Search = (props) => {
  console.log(props.fetchData)
  console.log(props.searchMeals.length,"searchmeals")
  console.log(props.meal.length,"meal")
  console.log("kategorimeals", props.categoryMeals.length)
      return(
         <>
         <div className="container">
          <div className="row">

          {(() => {
            if (props.selectedMeal) {
              return (
                <div className="row">
                 { props.meal.map((mealContent) => (
                  <div className="row">
                  <div className="col-3"> 
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">{mealContent.category}</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{mealContent.nationality}</li>
                      </ol>
                    </nav>
                    <h5> {mealContent.name} </h5>
                    
                     <figure className="figure">
                      <img src={mealContent.img} className="img figure-img img-thumbnail rounded mx-auto d-block" alt="..."/>
                      <figcaption className="figure-caption text-end"> Meal id: {mealContent.id}</figcaption>
                    </figure>
                    </div>     

              <div className="col-9"> 
              <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Ingredient</th>
                              <th scope="col">Measure</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                              <ul className="list-unstyled list-group"> 
                       {mealContent.ingredients.map((ing) => (
                          <li> {ing} </li>
                        ))}
                        </ul>
                              </td>

                              <td>
                              <ul className="list-unstyled list-group"> 
                       {mealContent.measures.map((mea) => (
                          <li> {mea} </li>
                        ))}
                        </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>          
              </div>
                                        
                    <div className="col-12">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#panelsStayOpen-collapseOne" 
                      aria-expanded="true" 
                      aria-controls="panelsStayOpen-collapseOne">
                        Recipe
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                      <div className="accordion-body">
                      {mealContent.instruction}
                      </div>
                    </div>
                  </div>
                </div> 
                      </div>
                      </div>
                      
                ))}
                </div>
              );
            }
            else if(props.meal.length === 1) {
              return (
                <div className="row">
                 { props.meal.map((mealContent) => (
                  <div className="row">
                    <div className="col-3"> 
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">{mealContent.category}</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{mealContent.nationality}</li>
                      </ol>
                    </nav>

                    <h5> {mealContent.name} </h5>

                     <figure className="figure">
                      <img src={mealContent.img} className="img figure-img img-thumbnail rounded mx-auto d-block" alt="..."/>
                      <figcaption className="figure-caption text-end"> Meal id: {mealContent.id}</figcaption>
                    </figure>
                    </div>
                    

                    
                      <div className="col-9"> 
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Ingredient</th>
                              <th scope="col">Measure</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                              <ul className="list-unstyled"> 
                       {mealContent.ingredients.map((ing) => (
                          <li> {ing} </li>
                        ))}
                        </ul>
                              </td>

                              <td>
                              <ul className="list-unstyled"> 
                       {mealContent.measures.map((mea) => (
                          <li> {mea} </li>
                        ))}
                        </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>    
                      </div>    

                        <div className="col-12"> 
                      <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#panelsStayOpen-collapseOne" 
                      aria-expanded="true" 
                      aria-controls="panelsStayOpen-collapseOne">
                        Recipe
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                      <div className="accordion-body">
                      {mealContent.instruction}
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                      </div>
                ))}
                </div>
              );
            }
            return null;
          })()}
              { <div className="row"> 
                {(props.categoryMeals.length < 1 && props.searchMeals.length == 25) && (
                  <div className="col-1 m-2 mt-3">
                   <button type="button" className="btn mainColor position-relative">
                    Categories
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                      {props.categories.length}
                    </span>
                  </button>
                  </div>
                )}

                {(props.searchMeals.length > 0) && (
                  <div className="col-1 m-2 mt-3">
                    <button type="button" className="btn btn-secondary position-relative">
                      Foods
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill mainColor">
                      99+
                      </span>
                    </button>
                  </div>
                )}
                </div>
              }
          {props.fetchData === false && props.searchMeals.length < 25 ?
             props.searchMeals.map((meals) => (
              <div className="col-lg-3 col-md-6 col-sm-3">
                <div className="card m-2  mt-3 p-2 " onClick={() => {props.setSelectedMeal(meals.name)}}>
                  <img src={meals.img} alt="..." className="card-img-top img"/>
                  <span className="position-absolute badge mainColor">
                      {meals.category}
                  </span>
                  <div className="card-body p-2"> 
                  <h5>{meals.name} </h5>
                 <span> {meals.id} - {meals.nationality} </span>
                 </div>
                </div>
                  </div>
            )) : props.categoryMeals.length > 0 ? (
            props.categoryMeals.map((ctrMeal) => (
              <div className="col-lg-3 col-md-5 col-sm-6">
                <div className="card m-2 mt-3 p-2" onClick={() => {props.setSelectedMeal(ctrMeal.name)}}>
                  <img src={ctrMeal.img} className="card-img-top img" alt="..."/>
                   
                  <div className="card-body p-2">
                    <h5 className="card-title">  {ctrMeal.name} </h5>
                  </div>
                </div>
              </div>
            ))) : 
            
            (
    
             
              props.categories.map((category) => (
                <div className="col-lg-3 col-md-5 col-sm-6">
                  
                  <div className="card m-2 mt-3 p-2" onClick={() => {props.setSelectedCategory(category.name)}}>

                    <img src={category.img} className="card-img-top" alt="..."/>
                    <span className="position-absolute badge mainColor">
                      {category.name}
                      </span>
                    <div className="card-body p-2">
                      <h5 className="card-title">  {category.name} </h5>
                      <p className="card-text">  {category.description}</p>
                    </div>
                  </div>
                </div>
              ))
              
            )}
  
  
  
          </div>
         </div>
      
         </>
      );
  }
  
  export default Search;