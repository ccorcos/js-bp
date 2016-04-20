import 'styles/base.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from 'ui/header'
import Counter from 'ui/counter'

const root = document.getElementById('root')
const renderRoot = (component) =>
  ReactDOM.render(component, root)

let count = 0

const render = () => {
  const increment = () => {
    count += 1
    render()
  }
  const decrement = () => {
    count -= 1
    render()
  }
  renderRoot(
    <div>
      <Header/>
      <Counter
        increment={increment}
        decrement={decrement}
        count={count}
      />
    </div>
  )
}

render()
