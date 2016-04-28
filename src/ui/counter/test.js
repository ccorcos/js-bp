import React from 'react'
import {mount} from 'enzyme'
import sinon from 'sinon/pkg/sinon'
import expect from 'expect'
import Counter from 'ui/counter'

describe('<Counter />', () => {

  it('increments', () => {
    const increment = sinon.spy()
    const decrement = sinon.spy()
    const counter = mount(<Counter count={0} increment={increment} decrement={decrement}/>)
    counter.find('button').at(1).simulate('click')
    expect(increment.calledOnce).toEqual(true)
    expect(decrement.calledOnce).toEqual(false)
  })

  it('decrements', () => {
    const increment = sinon.spy()
    const decrement = sinon.spy()
    const counter = mount(<Counter count={0} increment={increment} decrement={decrement}/>)
    counter.find('button').at(0).simulate('click')
    expect(increment.calledOnce).toEqual(false)
    expect(decrement.calledOnce).toEqual(true)
  })

  it('shows the count', () => {
    const increment = sinon.spy()
    const decrement = sinon.spy()
    const counter = mount(<Counter count={10} increment={increment} decrement={decrement}/>)
    expect(counter.find('span').text()).toEqual('10')
    expect(increment.calledOnce).toEqual(false)
    expect(decrement.calledOnce).toEqual(false)
  })

})