import logo from '../img/logo.png';
import {Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return(
      <nav className="navbar navbar-expand-lg bg-white fixed-top shadow p-3">
         <div className="container-fluid">

           <a href="https://mrtuzl.github.io/recipe-app/dist/"> 
             <img src={logo} alt="Logo" width="60" height="40" className="d-inline-block mx-auto p-1"/>
           </a> 

           <a href="https://mrtuzl.github.io/recipe-app/dist/"> 
            <span className='recipe p-2 fw-bold fs-5'> Recipe App </span>
           </a>    

             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto text-uppercase px-5 fw-bolder">
           
             <ScrollLink  to="home" 
                className="nav-link active text-end mx-2" 
                aria-current="page"
                spyThrottle={100} 
                smooth={true} 
                offset={-500} 
                duration={200}>  Home  </ScrollLink>  

                <ScrollLink  to="search" 
                className="nav-link text-end mx-2" 
                aria-current="page"
                spyThrottle={100} 
                smooth={true} 
                offset={140} 
                duration={200}> Menu </ScrollLink> 
               
               <ScrollLink  to="footer" 
                className="nav-link text-end mx-2" 
                aria-current="page"
                spyThrottle={100} 
                smooth={true} 
                offset={140} 
                duration={200}> About </ScrollLink> 
                
            </div>
            </div>
        </div>
     </nav>
    );
}

export default Navbar;