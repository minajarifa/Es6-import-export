import { add, diff, divide, mult } from "../../utils/math/math"

export default function Home() {
    const sum = add(2,3)
const subs = diff(5,2)
const goonFol = mult(2,2)
const someOne= divide(6/2)
console.log(sum,subs,goonFol,someOne)
  return (
    <div>Home</div>
  )
}
