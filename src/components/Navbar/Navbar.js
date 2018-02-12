import React from 'react'
import Hamburger from './Objects/Hamburger'
import FullMenu from './Objects/FullMenu'
import './Navbar.css'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      visible : false
    }
    this.hide = this.hide.bind(this)
    this.show = this.show.bind(this)
  }

  show(){
    this.setState({visible:true})
    console.log("show");
  }

  hide(){
    this.setState({visible:false})
  }

  render() {
    return (<div>
                <div className="nav">
                  <Hamburger toggle={this.show}/>
                    <div className="nav-line"></div>
                    <div className="nav-line"></div>
                    <div className="nav-line"></div>
                    <div className="nav-line"></div>
                    <div className="nav-line"></div>
                </div>
                {this.state.visible && <FullMenu toggle={this.hide}/>}
            </div>
            )
  }
}

export default Navbar
