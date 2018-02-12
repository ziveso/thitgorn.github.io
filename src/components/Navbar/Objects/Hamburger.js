import React from 'react'
import './Hamburger.css'

const Hamburger = (props) => {
  return (<div className="btn-menu" onClick={()=>{props.toggle()}}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-1"></div>
            <div className="navbar-text">MENU</div>
          </div>)
}

export default Hamburger
