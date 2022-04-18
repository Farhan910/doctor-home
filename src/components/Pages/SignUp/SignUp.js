import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth, {
    sendEmailVerification: true,
  });

  const location = useLocation();
  const from = location.state?.from?.pathname || "/checkout";
  const [user1] = useAuthState(auth);

  const navigate = useNavigate();
  if (user1) {
    navigate(from, { replace: true });
  }

  if(loading) {
    return <Loading/>
  }

  if (error) {
    toast(error.message);
  }

  return (
    <div className="w-100 m-auto mt-5">
      <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicEmail">
        <h2 className="mb-2">Sign Up</h2>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          onBlur={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onBlur={(e) => setPassword(e.target.value)}
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
        have an account? <Link to="/login"> Login please</Link>
      </p>
    </div>
  );
};

export default SignUp;
