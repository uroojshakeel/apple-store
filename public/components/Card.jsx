// src/components/Card.jsx
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white w-64 rounded-xl shadow-2xl transition hover:shadow-xl hover:scale-105 duration-300 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-contain" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
