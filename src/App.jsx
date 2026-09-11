import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(1)
  return (
    <div>
      <button onClick={() => setCount(c => c-1)}>-</button>
      <h3>{count}</h3>
      <button onClick={() => setCount(c => c+1)}>+</button>

      <div>
        <form action="">
          <div>
              <label htmlFor="">Enter Your Name:</label>
              <input type="text" />
          </div>

          <div>
              <label htmlFor="">Enter Your Email:</label>
              <input type="text" />
          </div>

          <div>
              <label htmlFor="">Version B Password:</label>
              <input type="text" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App