
import './App.css'
import Counter from './counter'
import Friends from './Friends'
import User from './user'
function App() {
  const handaleClick =()=>{
    alert('click hoiche')

  }
const adder = (num)=>{
  alert (num+10)
} 
  return (
 
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <User></User>
      <Counter></Counter>
      <button onClick={handaleClick}>Click 1</button>
      <button onClick={() => { alert('third click')} }>Clicki-3</button>
      <button onClick={() => adder(5)}>click adder</button>
    </>
  )
}

export default App
