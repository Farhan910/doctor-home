import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, hookError] =
    useCreateUserWithEmailAndPassword(auth);

    

  const [signInWithGoogle, googleError] = useSignInWithGoogle(auth,{sendEmailVerification: true });
  
  

  const location = useLocation();
  const from = location.state?.from?.pathname || "/checkout";
  const [user] = useAuthState(auth);


  const navigate = useNavigate();
  if (user) {
    navigate(from, {replace:true});
  }

  useEffect(() => {
    if (hookError || googleError) {
        switch (hookError?.code) {
            case "auth/invalid-email":
                toast("Invalid email provided, please provide a valid email");
                break;
            case "auth/invalid-password":
                toast("Wrong password. Intruder!!");
                break;
            default:
                toast("something went wrong");
        }
    }
}, [hookError]);

  return (
    <div className="w-100 m-auto mt-5">
      <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicEmail">
      <h2 className="mb-2">Sign Up</h2>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <div className="d-flex justify-content-center">
        <Button
          className="button-service w-25"
          type="submit"
          onClick={() => createUserWithEmailAndPassword(email, password)}
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
      <ToastContainer />

      <p className="d-flex justify-content-center">
         have an account?  <Link to="/login"> Login please</Link>
      </p>
    </div>
  );
};

export default SignUp;
