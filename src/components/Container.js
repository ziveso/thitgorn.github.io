import React from 'react'
import Welcome from '../components/Welcome'
import Profile from '../components/Profile'
import About from '../components/About'
import '../components/Container.css'

class Container extends React.Component {

  constructor( props ) {
    super( props )
    this.state = props
  }

  render() {
    return (<div>
              <Welcome/>
              <div className="about">
                <Profile data={this.state}/>
                <About/>
              </div>
            </div>)
  }
}

export default Container
