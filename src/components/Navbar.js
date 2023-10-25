import logo from '../img/logo.png';
import App from './App';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-white sticky-top shadow p-3">
        <div className="container-fluid">
           <img src={logo} alt="Logo" width="60" height="40" className="d-inline-block mx-auto p-1"/> 
            <span className='recipe p-2 fw-bold fs-5'> Recipe App</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto text-uppercase px-5 fw-bolder">
                <a className="nav-link active text-end mx-2" aria-current="page" href="#">Home</a>
                <a className="nav-link text-end mx-2" href="#">Menu</a>
                <a className="nav-link text-end mx-2" href="#">About</a>
            </div>
            </div>
        </div>
     </nav>
    );
}

export default Navbar;