import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="d-flex navbar-container ">
            <div className="ms-5 mt-3">
                <h2>DOCTOR</h2>
            </div>
            <div className="ms-auto me-5 mt-4 ">
            <Link className=" links" to='/'>Home</Link>
            <Link className=" links ms-3"to='/services'>Services</Link>
            <Link className=" links ms-3"to='/login'>Login</Link>
            <Link className=" links ms-3"to='/signup'>Sign Up</Link>
            <Link className=" links ms-3"to='/blogs'>Blogs</Link>
            <Link className=" links ms-3"to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Navbar;