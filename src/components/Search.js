import {TiTickOutline} from "react-icons/ti"
import {LiaUtensilSpoonSolid} from "react-icons/lia";
import {Link as ScrollLink } from 'react-scroll';
import {HiHome} from "react-icons/hi2";

const Search = (props) => {

      return(
         <>
         <div className="container">
          <div className="row">

          {(() => {
            if (props.selectedMeal) {
              return (
                <div className="row">
                 { props.meal.map((mealContent) => (
                  <div className="row d-flex justify-content-center p-2">
                   <div className="col-xl-3 col-lg-4 col-md-5"> 
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"> {mealContent.category}</li>
                        <li className="breadcrumb-item active" aria-current="page">{mealContent.nationality}</li>
                      </ol>
                    </nav>

                      <h5> {mealContent.name} </h5>
                      <figure className="figure">
                       <img src={mealContent.img} className="img figure-img img-thumbnail rounded mx-auto d-block" alt="..."/>
                         <figcaption className="figure-caption text-start"> Meal id: {mealContent.id}</figcaption>
                           <span className="badge bg-secondary ">
                             {mealContent.tags !== "" && mealContent.tags !== " " && mealContent.tags !== null ?
                              <div> 
                                {mealContent.tags}
                              </div> 
                            :
                              <div>
                               {mealContent.category}
                              </div>
                             } 
                           </span>
                    </figure>
                    </div>     

                  <div className="col-xl-9 col-lg-8 col-md-7 p-1"> 
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
                                  <li id={mealContent.id}>  {ing !== "" && ing !== " " && ing !== null ?
                                  <div>
                                  <TiTickOutline/>
                                  {ing}
                                  </div>
                                  : null} </li>
                            ))}
                            </ul>
                          </td>
                          <td>
                            <ul className="list-unstyled list-group"> 

                              {mealContent.measures.map((mea) => (
                                <li id={mealContent.id}>  {mea !== "" && mea !== " " && mea !== null ?
                                <div>
                                <LiaUtensilSpoonSolid/>
                                {mea}
                                </div>
                                : null} </li>
                            ))}
                        </ul>
                          </td>
                        </tr>
                      </tbody>
                   </table>          
                </div>
                                        
                    <div className="col-xl-12">
                     <div className="accordion" id="accordionPanelsStayOpenExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button bg-warning" 
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
                  {props.meal.map((mealContent) => (
                   <div className="row d-flex justify-content-center p-2">
                    <div className="col-xl-3 col-lg-4 col-md-5"> 
                      <nav aria-label="breadcrumb">
                       <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"s>{mealContent.category}</li>
                        <li className="breadcrumb-item active" aria-current="page">{mealContent.nationality}</li>
                      </ol>
                    </nav>

                    <h5> {mealContent.name} </h5>
                    <figure className="figure">
                      <img src={mealContent.img} className="img figure-img img-thumbnail rounded mx-auto d-block" alt="..."/>
                        <figcaption className="figure-caption text-start"> Meal id: {mealContent.id}</figcaption>
                          <span className="badge bg-secondary ">
                            {mealContent.tags !== "" && mealContent.tags !== " " && mealContent.tags !== null ?
                              <div> 
                                {mealContent.tags}
                              </div> 
                            :
                              <div>
                                {mealContent.category}
                              </div>
                            } 
                         </span>
                    </figure>
                  </div>
                    
                      <div className="col-xl-9 col-lg-8 col-md-7 p-1"> 
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
                                    <li id={mealContent.id}>  {ing !== "" && ing !== " " && ing !== null ?
                                    <div>
                                    <TiTickOutline/>
                                    {ing}
                                    </div>
                                    : null} </li>
                                   ))}
                               </ul>
                              </td>
                              <td>
                                <ul className="list-unstyled list-group"> 

                                  {mealContent.measures.map((mea) => (
                                    <li id={mealContent.id}>  {mea !== "" && mea !== " " && mea !== null ?
                                    <div>
                                    <LiaUtensilSpoonSolid/>
                                    {mea}
                                    </div>
                                    : null} </li>
                              ))}
                               </ul>
                               </td>
                             </tr>
                           </tbody>
                         </table>          
                       </div>    

                        <div className="col-xl-12"> 
                         <div className="accordion" id="accordionPanelsStayOpenExample">
                           <div className="accordion-item">
                             <h2 className="accordion-header">
                             <button className="accordion-button bg-warning" 
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

              {
                <div className="p-3 mx-2"> 
                   <a href="/"> <button type="button" className="btn btn-warning btn-md mainColor shadow">
                       <HiHome/>       
                    </button> </a>

                {(props.categoryMeals.length < 1 && props.searchMeals.length == 25) && (
                  <div className="d-inline m-2 mt-3 bg-primary">
                    <button type="button" className="btn mainColor position-relative shadow">
                      Categories
                       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                         {props.categories.length}
                       </span>
                  </button>
                </div>
                )}

                {(props.searchMeals.length > 0) && (
                  <div className="d-inline m-2 mt-3 ">
                    <button type="button" className="btn btn-secondary position-relative shadow">
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className="card m-2  mt-3 p-2 ">
                  <img src={meals.img} alt="..." className="card-img-top img"/>
                  <span className="position-absolute badge mainColor">
                      {meals.category}
                  </span>
                   <div className="card-body p-2"> 
                     <p className="card-title fw-bold overflow-ellipsis">  {meals.name} </p>
                 
                  <ScrollLink  to="search"  
                    aria-current="page"
                    spyThrottle={100} 
                    smooth={true} 
                    offset={140} 
                    duration={200}>  

                  <button 
                    className="btn btn-sm mainColor"
                    onClick={() => {props.setSelectedMeal(meals.name)}}> 
                    Read More..
                  </button>

                  </ScrollLink> 

                 </div>
                </div>
             </div>
            )) : 
            props.categoryMeals.length > 0 ? (
              props.categoryMeals.map((ctrMeal) => (
               <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-9 d-flex justify-content-center">
                 <div className="card m-2 mt-3 p-2 shadow">
                   <img src={ctrMeal.img} className="card-img-top img" alt="..."/>
                      <div className="card-body p-2">
                        <p className="card-title fw-bold overflow-ellipsis"> {ctrMeal.name} </p>
                   
                    <ScrollLink  to="search"  
                      aria-current="page"
                      spyThrottle={100} 
                      smooth={true} 
                      offset={140} 
                      duration={200}>  

                      <button 
                      className="btn btn-sm mainColor"
                      onClick={() => {props.setSelectedMeal(ctrMeal.name)}}> 
                      Read More..                
                      </button>
                    
                    </ScrollLink>

                  </div>
                </div>
              </div>
            ))) : 
            (
              props.categories.map((category) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-9 d-flex justify-content-center">
                   <ScrollLink  to="search"  
                      aria-current="page"
                      spyThrottle={100} 
                      smooth={true} 
                      offset={140} 
                      duration={200}>  
                      <div className="card m-2 mt-3 p-1 shadow" onClick={() => {props.setSelectedCategory(category.name)}}>
                        <img src={category.img} className="card-img-top" alt="..."/>
                        <span className="position-absolute badge mainColor">
                          {category.name}
                        </span>
                          <div className="card-body p-2   overflow">
                            <h5 className="card-title">  {category.name} </h5>
                            <p className="card-text">  {category.description}</p>
                         </div>
                      </div>
                  </ScrollLink>
                </div>
              )))}
          </div>
         </div>
         </>
      );
  }
  
  export default Search;