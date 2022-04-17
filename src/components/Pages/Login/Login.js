import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  
    if (user) {
      navigate("/services");
    }
  

  if (error) {
    return (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p className="text-warning">Registered User: {user.email}</p>
      </div>
    );
  }

  return (
    <div className="w-100 m-auto mt-5">
      <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicEmail">
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
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
