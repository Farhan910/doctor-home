import React from "react";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import "./ServicesCard.css";

const ServicesCard = ({ service }) => {
  const { visit, subject, img, comment } = service;
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  return (
    <div>
      <a
        class="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
        href=""
      >
        <img
          class="object-cover w-full h-56"
          src={img}
          alt=""
        />

        <div class="p-6">
          <h5 class="text-xl font-bold">
            <span class="text-gray-700">{visit}</span>
          </h5>

          <p class="mt-2 text-sm text-gray-500">
           {comment}
          </p>

          <div class="inline-block pb-1 mt-4 font-medium  text-blue-600 border-b border-blue-500  " onClick={() => navigate(user? "/checkout" : "/login")}>
          Check out
            <span aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </a>

      {/* <Card className="card ">
        <Card.Body className="p-0">
          <img className="w-100 " src={img} alt={img} />
          <div className="card-text">
          <Card.Title className="text-primary">Subject : {subject}</Card.Title>
            <Card.Text className="text">Doctor Visit : {visit}</Card.Text>
            <p className="text">Comment : {comment}</p>
          </div>
          <button
             className="button-service" onClick={() => navigate(user? "/checkout" : "/login")}>
            Check Out
          </button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default ServicesCard;
