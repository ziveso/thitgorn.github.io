import React from 'react'
import './Navbar.scss'
import { Link } from 'react-scroll'

class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
      state : ""
    }
    this.getColor = this.getColor.bind(this)
    this.handleSetActive = this.handleSetActive.bind(this)
  }

  getColor() {
    var styleBlack = {
      color: "white",
      background: "black"
    }
    var styleWhite = {
      color: "black",
      background: "white"
    }
    if(this.state.state === "Welcome")
      return styleBlack;
    else
      return styleWhite;
  }

  handleSetActive(e) {
    this.setState( { state : e } )
  }

  render() {
    return (<div className="AlwaysOnTop">
                <div style={this.getColor()}>
                  <Link to="Welcome" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>Welcome</Link>
                  <Link to="Profile" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>Profile</Link>
                </div>
            </div>)
  }
}

export default Navbar
