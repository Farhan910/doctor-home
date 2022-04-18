import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle,user1,googleError] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (user) {
    navigate("/checkout");
  }
  if(user1){
      navigate("/checkout");
  }

  useEffect(() => {
    const error = hookError || googleError;
    if(error){
        switch(error?.code){
            case "auth/invalid-email":
                toast("Invalid email provided, please provide a valid email");
                break;
            case "auth/invalid-password":
                toast("Wrong password. Intruder!!")
                break;
            default:
                toast("something went wrong")
        }
    }
}, [hookError, googleError])

  
 

  return (
    <div className="w-100 m-auto mt-5">
      <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicEmail " required>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicPassword" required>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <div className="d-flex justify-content-center ">
        <Button
          className="button-service w-25 d-block"
          type="submit"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Submit
        </Button>
        
        
      </div>
      <div className="d-flex justify-content-center">
      <button className="button-service w-25 d-block" onClick={() =>signInWithGoogle()}>Google</button>
      </div>
      <p className="d-flex justify-content-center">Don't have an account? <Link to="/signup">Sign up first</Link> </p>
      <ToastContainer/>
    </div>
  );
};

export default Login;
