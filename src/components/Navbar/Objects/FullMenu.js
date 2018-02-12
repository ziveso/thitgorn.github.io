import React from 'react'
import Hamburger from './Hamburger'
import './FullMenu.css'

class FullMenu extends React.Component {
  render() {
    return (<div className="development">
              <div className="nav-full">
                <div className="nav-center"><Hamburger toggle={this.props.toggle}/></div>
                  <div className="nav-full-line"></div>
                  <div className="nav-full-line"></div>
                  <div className="nav-full-line"></div>
                  <div className="nav-full-line"></div>
                  <div className="nav-full-line"></div>
              </div>
            </div>)
  }
}

export default FullMenu
