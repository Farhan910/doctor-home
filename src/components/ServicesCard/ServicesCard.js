import React from "react";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./ServicesCard.css";

const ServicesCard = ({ service }) => {
  const { id, subject, img, comment } = service;

  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  if(user){
      navigate('/checkout')
  }
  if(!user){
        navigate('/login')
  }

  return (
    <div>
      <Card className="card ">
        <Card.Body className="p-0">
          <img className="w-100 " src={img} alt={img} />
          <div className="card-text">
          <Card.Title>Subject : {subject}</Card.Title>
            <Card.Text>Id {id}</Card.Text>
            <p>Comment : {comment}</p>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="button-service "
          >
            Check Out
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesCard;