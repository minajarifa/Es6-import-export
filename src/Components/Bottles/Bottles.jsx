import { use, useState } from "react";
import Bottle from "./Bottle";

export default function Bottles({ promiseBottles }) {
  const bottles = use(promiseBottles);
  const [card, setcard] = useState([]);
  const handleAddToCard = (bottol) => {
    const newCards = [...card, bottol];
    setcard(newCards);
  };
  console.log("card", card);

  return (
   <div>
    <h1>Bottols: {bottles.length}</h1>
    <h1>Added Cards: {card.length}</h1>
     <div className="grid grid-cols-3">
      {bottles.map((bottle) => (
        <Bottle
          key={bottle.id}
          bottle={bottle}
          handleAddToCard={handleAddToCard}
        ></Bottle>
      ))}
    </div>
   </div>
  );
}
