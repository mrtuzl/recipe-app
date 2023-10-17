import Navbar from "./Navbar";
import Search from "./Search";
import img from "../img/carousel3.jpg";
const Header = () => {
    return(
        <header className="header"> 
       <Navbar/>
            <div className="header-content d-flex align-items-center justify-content-center flex-column text-center bg-image" 
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.1)) , url(${img})` }}>
            <h1 className="header-title ls-2 text-white fw-bold"> What are your favorite cuisines? </h1>
            <p className="text-uppercase my-3 ls-1 text-white fw-bold"> personelize your experience </p>
            
            <Search/>
            </div>
           
       </header>
    );
}

export default Header; 
