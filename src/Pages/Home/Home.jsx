// import { add, diff, divide, mult } from "../../utils/math/math"

import { Suspense } from "react";
import Bottles from "../../Components/Bottles/Bottles";

export default function Home() {
//     const sum = add(2,3)
// const subs = diff(5,2)
// const goonFol = mult(2,2)
// const someOne= divide(6/2)
// console.log(sum,subs,goonFol,someOne)
const promiseBottles = fetch(`/public/bottles.json`).then((res) =>
    res.json(),
  );
  return (
    <div>
         <Suspense fallback={`Data loading commitng soon...`}>
        <Bottles promiseBottles={promiseBottles}></Bottles>
      </Suspense>
    </div>
  )
}

