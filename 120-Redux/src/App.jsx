import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './counter/counterSlice'

function App() {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
 
      <div>
      <button onClick={()=>dispatch(decrement())}> - </button>
        Currently count is : {count}
      <button onClick={()=>dispatch(increment())}> + </button>    
        </div>
     
    </>
  )
}

export default App
