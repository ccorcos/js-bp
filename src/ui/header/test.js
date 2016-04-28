import React from 'react'
import { mount } from 'enzyme'
import expect from 'expect'
import Header from 'ui/header'

describe('<Header />', () => {
  it('show the title', () => {
    const header = mount(<Header/>)
    expect(header.find('h1').text()).toEqual('JS-BP')
  })
})
