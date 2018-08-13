import React from 'react'
import NoThis from '../src/NoThis'

class Counter extends NoThis.Component {
  state = { count: 0 }

  increment({ setState }) {
    setState(({ count }) => ({ count: count + 1 }))
  }

  render({ increment, state: { count } }) {
    return (
      <div>
        <button onClick={increment}>{count}</button>
      </div>
    )
  }
}

export default Counter
