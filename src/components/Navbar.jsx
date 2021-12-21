import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                    <h1>ziroh-mail-gateway-demo</h1>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="">Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </nav> */}


            <nav class="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <h1>ziroh-mail-gateway-demo</h1>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" to="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/cart">Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="">Profile</a>
                        </li>
                    </ul>
                </div> */}
            </nav>

        </>
    );
}

export default Navbar;