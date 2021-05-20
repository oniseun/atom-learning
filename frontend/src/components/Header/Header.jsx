import './Header.css'

import React from 'react'

import logo from './logo.svg'

const Header = () => (
  <header className="header">
    <img src={logo} alt="" className="logo" />
    <h1 className="title">The Atom Learning Coding Test</h1>
  </header>
)

export default Header
