import React from 'react'
import Welcome from '../components/Welcome'
import Profile from '../components/Profile'
import About from '../components/About'
import Award from '../components/Award'
import Project from '../components/Project'
import '../components/Container.css'

class Container extends React.Component {

  constructor( props ) {
    super( props )
    this.state = props
  }

  render() {
    return (<div>
              <Welcome/>
              <div className="container">
                <div className="about">
                  <Profile data={this.state}/>
                  <About/>
                </div>
                <Award/>
                <Project/>
              </div>
            </div>)
  }
}

export default Container
