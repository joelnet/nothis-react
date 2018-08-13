import { mount } from 'enzyme'
import React from 'react'
import CountArguments from '../../__mocks__/CountArguments'
import Counter from '../../__mocks__/Counter'

describe('Component.js', () => {
  test('<Counter /> increments count when button is clicked', () => {
    const wrapper = mount(<Counter />)
    const button = wrapper.find('button')

    button.simulate('click')

    const actual = button.text()
    const expected = '1'
    expect(actual).toBe(expected)
  })

  test('<CountArguments /> counts 1 argument (event)', () => {
    const wrapper = mount(<CountArguments />)
    const button = wrapper.find('button')

    button.simulate('click')

    const actual = button.text()
    const expected = '1'
    expect(actual).toBe(expected)
  })
})
