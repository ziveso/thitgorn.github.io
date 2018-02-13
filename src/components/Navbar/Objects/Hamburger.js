import React from 'react'
import './Hamburger.css'

const Hamburger = (props) => {
  return (<div onClick={()=>{props.toggle()}} className="text-center pointer">
            <div className="btn-menu">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-1"></div>
            </div>
            <div className="navbar-text">MENU</div>
          </div>)
}

export default Hamburger
