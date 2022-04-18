import React, { useEffect, useState } from "react";
import { Button, Form, ToastContainer } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [email1, setEmail1] = useState("");

  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, hookError,error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleError] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/checkout";
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  if (user) {
    navigate(from, { replace: true });
  }

  
  useEffect(() => {
    const allError = hookError || googleError|| error;
    if(allError){
        switch(allError?.code){
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

      
      <Form.Group
        className="mb-3 w-25 m-auto"
        controlId="formBasicEmail "
        required
      >
        <h2 className="mb-2">Login</h2>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group
        className="mb-3 w-25 m-auto"
        controlId="formBasicPassword"
        required
      >
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <ToastContainer/>
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
        <button
          className="button-service w-25 d-block"
          onClick={() => signInWithGoogle()}
        >
          Google
        </button>
      </div>
      <p className="d-flex justify-content-center">
        Don't have an account? <Link to="/signup">Sign up first</Link>
      </p>
     

      <div className="d-flex justify-content-center">
        <input className=" w-25 d-block mb-2"
          type="email"
          value={email1}
          onChange={(e) => setEmail1(e.target.value)}
        />
        
       
      </div>

      <div className="d-flex justify-content-center">
      <button className="button-service w-25 "
          onClick={async () => {
            await sendPasswordResetEmail(email1);
          }}
        >
          Reset password
        </button>
      </div>
      
    </div>
  );
};

export default Login;
