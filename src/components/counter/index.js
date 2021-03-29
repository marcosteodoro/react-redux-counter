'use strict'

import React from 'react'

const Counter = ({ counter, decrement, increment, removeCounter }) => (
  <div style={{ position: 'relative', border: '1px solid #000', padding: 5 }}>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <button
      onClick={removeCounter}
      style={{
        fontSize: 7,
        position: 'absolute',
        right: 0,
        top: 0
      }}>
        &times;
    </button>
  </div>
)

export default Counter
