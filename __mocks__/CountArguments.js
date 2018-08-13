import React from 'react'
import NoThis from '../src/NoThis'

class CountArguments extends NoThis.Component {
  state = { count: 0 }

  countArgs = (...args) => {
    this.setState(() => ({ count: args.length }))
  }

  render({ countArgs, state: { count } }) {
    return (
      <div>
        <button onClick={countArgs}>{count}</button>
      </div>
    )
  }
}

export default CountArguments
