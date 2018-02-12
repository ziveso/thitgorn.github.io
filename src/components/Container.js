import React from 'react'
import Welcome from './Welcome/Welcome'
import Profile from './Profile/Profile'
import About from './About/About'
import Award from './Award/Award'
import Project from './Project/Project'
import RelatedCouse from './Course/RelatedCouse'

import Navbar from './Navbar/Navbar'

import './Container.css'
import { Element } from 'react-scroll'

class Container extends React.Component {

  constructor( props ) {
    super( props )
    this.state = {
      p : props,
    }
  }


  render() {
    return (<div className="navSpace">
              <Element name="Welcome">
                <Welcome/>
              </Element>

              <div className="container">
                <Element name="Profile">
                  <div className="about row">
                    <div className="col-md-4">
                      <Profile data={this.state.p}/>
                    </div>
                    <div className="col-md-8">
                      <About/>
                    </div>
                  </div>
                </Element>
                <Element name="Course">
                  <RelatedCouse/>
                </Element>
                <Element name="Award">
                  <Award/>
                </Element>
                <Element name="Project">
                  <Project/>
                </Element>
              </div>
              <Navbar/>
            </div>)
  }
}

export default Container
