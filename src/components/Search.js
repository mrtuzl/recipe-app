
const Search = (props) => {
console.log(props.fetchData)
console.log(props.searchMeals.length,"www")
console.log(props.meal.length,"ss")
    return(
       <>
      <ul>
       <div className="container">
        <div className="row">

        {props.fetchData === false && props.searchMeals.length < 25 ?
           props.searchMeals.map((meals) => (
            <div className="col-lg-2 col-md-6 col-sm-3 col-12 m-4 p-2">
              <div className="card" onClick={() => {props.setSelectedMeal(meals.name)}}>
              <h5> <li key={meals.id}>{meals.name}</li> </h5>
               <span> {meals.id} - {meals.category} - {meals.nationality} </span>
                <img src={meals.img} alt="..."/>
              </div>
                </div>
          ))
        :
        props.meal.length === 1 ?
             props.meal.map((mealContent) => (
                <div className="col-lg-12 col-md-6 col-sm-3 col-12 m-4 p-2">
                   <span> {mealContent.id} - {mealContent.category} - {mealContent.nationality} </span>
                    <img src={mealContent.img} alt="..."/>
                      <h5> <li key={mealContent.id}>{mealContent.name}</li> </h5>
                      <p> {mealContent.instruction} </p>
                      <ul> <li> {mealContent.ingredients} </li></ul>
                      <ul> <li> {mealContent.measures} </li></ul>
                    </div>
              ))
         : props.categoryMeals.length > 0 ? (
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
       </div>
      </ul>
       </>
    );
}

export default Search;
