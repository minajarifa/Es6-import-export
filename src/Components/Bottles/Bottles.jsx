
import { use, useState } from "react";
import Bottle from "./Bottle";

export default function Bottles({ promiseBottles }) {
  const bottles = use(promiseBottles);
  const [card,setcard]=useState([])
  const handleAddToCard=(bottol)=>{
    console.log(bottol)
  }
  

  return (
    <div className="grid grid-cols-3">
    
      {bottles.map((bottle) => (
       <Bottle key={bottle.id} bottle={bottle}
       handleAddToCard={handleAddToCard}
       ></Bottle>
      ))}
  
    </div>
  );
}
