import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="d-flex ">
            <div>
                <h2>this is logo</h2>
            </div>
            <div>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Navbar;