import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
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
              <label htmlFor="">Version A Password:</label>
              <input type="text" />
          </div>

          <h1>Version A</h1>
        </form>
      </div>

      {/* <button onClick={() => setIsOpen(m => !m)}>{`Modal ${isOpen ? "OFF" : 'ON'}`}</button>
      
      {isOpen && 
        <div>
          <h4>This is Modal</h4>
        </div>
      } */}

    </div>
  )
}

export default App