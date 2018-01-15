import React from 'react'
import './central.css'
import bcbk1 from '../../images/bcbk1.png'
import bcbk2 from '../../images/bcbk2.png'
import Toggle from '../Toggle'

var popup = [ <img src={bcbk1} className='img-responsive' alt='bcbk1'/> ,
              <img src={bcbk2} className='img-responsive' alt='bcbk2'/> ]

class Barcamp extends React.Component {
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
                <h3 onClick={this.toggle}>Barcamp Bangkean</h3>
                <Toggle toggle={this.toggle} click={this.state.click} element={popup}/>
            </div>);
  }
}

export default Barcamp;
