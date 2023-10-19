

const Search = (props) => {


    return(
       <>
      <ul>
       <div className="container">
        <div className="row">
        {props.categories.map((category, index) => (
           <div className="col-lg-3 col-md-5 col-sm-6 col-12 m-4 p-2">
             <div className="card">
             <img src={props.mealsImg} className="card-img-top" alt="..."/>
              <div className="card-body">
               <h5 className="card-title">  <li key={index}>{category}</li> </h5>
               <p className="card-text">Kategori açıklaması buraya gelir.</p>
               <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
            </div>
          </div>
        ))}
        </div>
       </div>
      </ul>
       </>
    );
}

export default Search; 