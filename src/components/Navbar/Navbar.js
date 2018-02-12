import React from 'react'
import './Navbar.css'
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
      background: "rgba(0, 0, 0, 0.3)"
    }
    var styleWhite = {
      background: "rgba(255, 255, 255, 0.3)"
    }
    if(this.state.state === "Welcome")
      return styleBlack;
    else
      return styleWhite;
  }

  getTextColor() {
    var styleBlack = {
      color: "white"
    }
    var styleWhite = {
      color: "#FF9D6C"
    }
    if(this.state.state === "Welcome")
      return styleBlack;
    else
      return styleWhite;
  }

  getStoke() {
    var styleBlack = "stokeOrange"
    var styleWhite = "stoke"
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
                  <nav className="navbar navbar-toggleable-md navbar-light bg-faded" style={this.getColor()}>
                    <div class={`navbar-text ${this.getStoke()}`}>
                      <Link style={this.getTextColor()} to="Profile" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                        PROFILE
                      </Link>
                    </div>
                    <span class={`navbar-text ${this.getStoke()}`}>
                      <Link style={this.getTextColor()} to="Course" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                        COURSE
                      </Link>
                    </span>
                    <span class={`navbar-text ${this.getStoke()}`}>
                      <Link style={this.getTextColor()} to="Welcome" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                        HOME
                      </Link>
                    </span>
                    <span class={`navbar-text ${this.getStoke()}`}>
                      <Link style={this.getTextColor()} to="Award" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                        ACHIEVEMENT
                      </Link>
                    </span>
                    <span class={`navbar-text ${this.getStoke()}`}>
                      <Link style={this.getTextColor()} to="Project" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                        EXPERIENCE
                      </Link>
                    </span>
                  </nav>
            </div>
            )
  }
}

export default Navbar
