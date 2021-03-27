'use strict'

import React, { PureComponent } from 'react'
import Counter from './counter'
import { createStore } from 'redux'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'DECREMENT': return state - 1
    case 'INCREMENT': return state + 1
  }

  return state
}

const store = createStore(counter)

class CounterContainer extends PureComponent {
  constructor () {
    super()

    this.increment = () => store.dispatch({ type: 'INCREMENT' })
    this.decrement = () => store.dispatch({ type: 'DECREMENT' })
  }

  componentDidMount () {
    store.subscribe(() => {
      this.setState({
        counter: this.forceUpdate()
      })
    })
  }

  render () {
    return (
      <Counter
        counter={store.getState()}
        decrement={this.decrement}
        increment={this.increment}
      />
    )
  }
}

export default CounterContainer
