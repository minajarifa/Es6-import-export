
import './App.css'
import { add, diff, mult, divide as dive } from './utils/math/math'

function App() {
const sum = add(2,3)
const subs = diff(5,2)
const goonFol = mult(2,2)
const someOne= dive(6/2)
console.log(sum,subs,goonFol,someOne)
  return (
    <>
      <h1>by awesome water bottol</h1>
    </>
  )
}

export default App
