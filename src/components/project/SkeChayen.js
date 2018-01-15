import React from 'react'
import Toggle from '../Toggle'

var popup = []

class SkeChayen extends React.Component {
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
                <h3 onClick={this.toggle}>Ske Chayen</h3>
                <Toggle toggle={this.toggle} click={this.state.click} element={popup}/>
            </div>);
  }
}

export default SkeChayen;
