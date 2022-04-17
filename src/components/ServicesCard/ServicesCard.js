import React from "react";
import { Card } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import "./ServicesCard.css";



const ServicesCard = ({ service }) => {
    const { id, name, img, comment } = service;
    
    const navigate = useNavigate();

  

  
  return (
    <div>
      <Card className="card ">
        <Card.Body className="p-0">
          <img className="w-100 " src={img} alt={img} />
          <Card.Title>Name : {name}</Card.Title>
          <Card.Text>Id {id}</Card.Text>
          <p>Comment : {comment}</p>
          <button onClick={() => navigate('/checkout')} className="button-service ">Go somewhere</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesCard;
