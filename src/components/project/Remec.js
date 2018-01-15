import React from 'react'
import './central.css'
import remec1 from '../../images/remec1.png'
import remec2 from '../../images/remec2.png'
import remec3 from '../../images/remec3.png'
import Toggle from '../Toggle'

var popup = [ <img src={remec1} className='img-responsive' alt='remec1'/> ,
              <img src={remec2} className='img-responsive' alt='remec2'/> ,
              <img src={remec3} className='img-responsive' alt='remec3'/> ]

class Remec extends React.Component {
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
                <h3 onClick={this.toggle}>Remec</h3>
                <Toggle toggle={this.toggle} click={this.state.click} element={popup}/>
            </div>);
  }
}

export default Remec;
