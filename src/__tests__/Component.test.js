import React from 'react'
import { mount } from 'enzyme'
import Counter from '../../__mocks__/Counter'

describe('Component.js', () => {
  test('<Counter /> increments count when button is clicked', () => {
    const wrapper = mount(<Counter />)
    const button = wrapper.find('button')
    button.simulate('click')
    expect(button.text()).toBe('1')
  })
})
