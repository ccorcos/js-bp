import './style.scss'
import React from 'react'

const Counter = (props) =>
  <div className="counter">
    <button onClick={props.decrement}>{'-'}</button>
    <span>{props.count}</span>
    <button onClick={props.increment}>{'+'}</button>
  </div>

Counter.propTypes = {
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired,
  count: React.PropTypes.number.isRequired,
}

export default Counter
