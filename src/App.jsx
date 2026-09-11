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
              <label htmlFor="">Enter Your Password:</label>
              <input type="text" />
          </div>

          <h1>Version A</h1>
        </form>
      </div>
    </div>
  )
}

export default App