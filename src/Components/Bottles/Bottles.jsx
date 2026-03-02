
import { use } from "react";
import Bottle from "./Bottle";

export default function Bottles({ promiseBottles }) {
  const bottles = use(promiseBottles);
  console.log(bottles);

  return (
    <div className="grid grid-cols-3">
    
      {bottles.map((bottle) => (
       <Bottle key={bottle.id} bottle={bottle}></Bottle>
      ))}
  
    </div>
  );
}
