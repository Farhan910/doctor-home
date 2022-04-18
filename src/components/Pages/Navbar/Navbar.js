import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const handleSignOut = () => {
    auth.signOut();
  };

  const [user] = useAuthState(auth);
  return (
    <div className="d-flex navbar-container sticky-top ">
      <div className="ms-5 mt-3">
        <h2 className="nav-name">Doctor Muhammad Ibrahim</h2>
      </div>
      <div className="ms-auto me-5 mt-4 ">
        <Link className=" links" to="/">
          Home
        </Link>
        <Link className=" links ms-3" to="/services">
          Services
        </Link>
        <Link className=" links ms-3" to="/blogs">
          Blogs
        </Link>
        <Link className=" links ms-3" to="/about">
          About
        </Link>
        {user ? (
          <Link onClick={handleSignOut} className=" links ms-3" to="#">
            Logout
          </Link>
        ) : (
          <>
            <Link className=" links ms-3" to="/login">
              Login
            </Link>
            <Link className=" links ms-3" to="/signup">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
