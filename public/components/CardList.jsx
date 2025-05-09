
import React from "react";
import Card from "./Card"; 

const data = [
  {
    id: 1,
    title: "iPhone 16 Pro 128GB Desert Titanium",
    description: "From: $999",
    image: "/iphone1.jpeg",
  },
  {
    id: 2,
    title: "iPhone 15 128GB Giallo",
    description: "From: $999",
    image: "/iphone2.jpeg",
  },
  {
    id: 3,
    title: "iPhone 16 Pro 128GB Desert Titanium",
    description: "From: $999",
    image: "/iphone1.jpeg",
  },
  {
    id: 4,
    title: "Apple iPhone 16 (256GB)-White",
    description: "From: $999",
    image: "/iphone4.jpeg",
  },
  {
    id: 5,
    title: "Apple iPhone 13 Mini",
    description: "From: $999",
    image: "/iphone5.jpeg",
  },
  {
    id: 6,
    title: "iPhone 15 256GB Plus",
    description: "From: $999",
    image: "/iphone6.jpeg",
  },
  {
    id: 7,
    title: "iPhone 16 Pro Max",
    description: "From: $999",
    image: "/iphone7.jpeg",
  },
  {
    id: 8,
    title: "iPhone 16 Pro 128GB ",
    description: "From: $999",
    image: "/iphone8.jpeg",
  },
  {
    id: 9,
    title: "iPhone 15 256GB Green",
    description: "From: $999",
    image: "/iphone9.jpeg",
  },
  {
    id: 10,
    title: "iPhone 15 256GB Green",
    description: "From: $999",
    image: "/iphone6.jpeg",
  },
  {
    id: 11,
    title: "iPhone 15 256GB Green",
    description: "From: $999",
    image: "/iphone4.jpeg",
  },
  {
    id: 12,
    title: "iPhone 15 256GB Green",
    description: "From: $999",
    image: "/iphone5.jpeg",
  }
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center p-6">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CardList;
