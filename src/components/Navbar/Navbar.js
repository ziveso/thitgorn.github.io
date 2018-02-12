import React from 'react'
import Hamburger from './Objects/Hamburger'
import './Navbar.css'

class Navbar extends React.Component {

  render() {
    return (<div className="navbar development">
                <div className="nav">
                  <Hamburger/>
                    <div className="nav-line"></div>
                    <div className="nav-line"></div>
                    <div className="nav-line"></div>
                    <div className="nav-line"></div>
                    <div className="nav-line"></div>
                </div>
            </div>)
  }
}

export default Navbar
