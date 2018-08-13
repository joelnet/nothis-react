# NoThis.Component for React

My contribution to the `#nothis` movement is `NoThis.Component`, a this-free way of creating a React component.

Create React component without the need for `this`. The context is passed in as the first argument to all methods.

Save your future self some time and never debug `this` again!

## Installation

Same way you install everything with JavaScript...

```bash
npm install -P nothis-react
```

## NoThis.Component

`NoThis.Component` works in a familiar way to `React.Component` because it inherits from `React.Component`.

The context you would previously access via `this` is available as the first function argument.

```javascript
import React from 'react'
import NoThis from 'nothis-react'

class Counter extends NoThis.Component {
  state = { count: 0 }

  increment(ctx) {
    ctx.setState(state => ({ count: state.count + 1 }))
  }

  render(ctx) {
    return (
      <div>
        <button onClick={ctx.increment}>{ctx.state.count}</button>
      </div>
    )
  }
}
```

## Argument Destructuring

If you love destructuring as much as I do, then code like this now becomes possible!

```javascript
import React from 'react'
import NoThis from 'nothis-react'

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
```

## Excluding Functions

A function can be excluded from `nothis` by writing it as a class property.

```javascript
class Counter extends NoThis.Component {
  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }
}
```
