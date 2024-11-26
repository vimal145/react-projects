import { useCallback, useState } from 'react'
import Additional from './additional'


function App() {
  const [count, setCount] = useState(0)
  const learning = useCallback(()=>{
    // something
  },[count])
  return (
   <>
   <h1>{count}</h1>
   <button onClick={()=>setCount(count+1)}>click me</button>
   <Additional  learning={learning} count={count}  />
   </>
  )
}

export default App
