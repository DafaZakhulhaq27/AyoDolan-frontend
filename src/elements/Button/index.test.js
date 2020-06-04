import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Button from './index'

test("should be span with class disabled if button disabled", () => {
    const { container } = render(<Button isDisabled></Button>)
    expect(container.querySelector('span.disabled')).toBeInTheDocument() 
})

test("should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument() 
})

test("should render <a> tag", () => {
    const { container } = render(<Router><Button href="" type="link" isExternal></Button></Router>)
    expect(container.querySelector('a')).toBeInTheDocument() 
})

