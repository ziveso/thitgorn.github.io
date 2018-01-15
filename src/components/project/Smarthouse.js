import React from 'react'
import './central.css'
import sh1 from '../../images/sh1.JPG'
import sh2 from '../../images/sh2.JPG'
import Toggle from '../Toggle'

var popup = [ <img src={sh1} className="img-responsive" alt="sh1" /> ,
              <img src={sh2} className="img-responsive" alt="sh2" />]

class Smarthouse extends React.Component {
  constructor() {
    super()
    this.state = { click : false}
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    var prev = !this.state.click
    this.setState( {click : prev} )
    console.log(this.state.click);
  }

  render() {
    return (<div>
                <h3 onClick={this.toggle}>Smarthouse</h3>
                <Toggle toggle={this.toggle} click={this.state.click} element={popup}/>
            </div>)
  }
}

export default Smarthouse;
