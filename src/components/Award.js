import React from 'react'
import localhackday1 from '../images/localhackday1.jpg'
import localhackday2 from '../images/localhackday2.jpg'
import localhackday3 from '../images/localhackday3.png'
import localhackday4 from '../images/localhackday4.jpg'

import Toggle from './Toggle'

var popup = [ <img src={localhackday3} className='img-responsive' alt="localhackday3" /> , <img src={localhackday1} className='img-responsive' alt="localhackday1" />
              , <img src={localhackday2} className='img-responsive' alt="localhackday2" /> , <img src={localhackday4} className='img-responsive' alt="localhackday4" />  ]

class Award extends React.Component {
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

  render () {
    return (<div>
              <h1>AWARD / ACHIEVEMENT</h1>
              <div onClick={this.toggle}>1st LOCAL HACKDAY - Hackaton 2017</div>
              <Toggle toggle={this.toggle} click={this.state.click} element={popup}/>
            </div>);
  }
}

export default Award
