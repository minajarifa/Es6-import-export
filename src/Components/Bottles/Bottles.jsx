import { use, useEffect, useState } from "react";
import Bottle from "./Bottle";
import {  getCardFromLocalStorage } from "../../utilitis/localStarage";

export default function Bottles({ promiseBottles }) {
  const [card, setcard] = useState([]);
  const bottles = use(promiseBottles);
// useEffect
useEffect(()=>{
  const storedCartId= getCardFromLocalStorage();
  console.log("storedCartId",storedCartId)
},[])
  
  const handleAddToCard = (bottol) => {
    const newCards = [...card, bottol];
    setcard(newCards);
    // save the bottole in the localstore
    getCardFromLocalStorage(bottol.id)
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
