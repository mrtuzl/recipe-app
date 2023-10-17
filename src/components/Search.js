

const Search = (props) => {

   
   

    return(
       <>

      <ul>
        {props.categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
   
       </>
    );
}

export default Search; 