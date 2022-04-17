import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ServicesCard.css";

const ServicesCard = ({ service }) => {
  const { id, name, img } = service;
  return (
    <div >
      <Card style={{ width: "25rem" , height: "35rem" }}>
        <Card.Body>
          <img className="w-100 " src={img} alt={img} />
          <Card.Title>Name : {id}</Card.Title>
          <Card.Text>Id {name}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesCard;
