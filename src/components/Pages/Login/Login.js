import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import "./Login.css";
import Loading from "../../Loading/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [email1, setEmail1] = useState("");

  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/checkout";
  const [user1] = useAuthState(auth);

  const navigate = useNavigate();
  if (user1) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading />;
  }
  if (error) {
    toast(error.message);
  }
  

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
          onBlur={(e) => setEmail(e.target.value)}
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
          onBlur={(e) => setPassword(e.target.value)}
        />
        <ToastContainer />
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
      <p className="d-flex justify-content-center ">
        Don't have an account?{" "}
        <button
          className="button-reset"
          onClick={async () => {
            await sendPasswordResetEmail(email);
            toast("Sent email");
          }}
        >
          Reset password
        </button>
      </p>

      <ToastContainer />
    </div>
  );
};

export default Login;
