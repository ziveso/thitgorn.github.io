import React from 'react'
import Welcome from './Welcome/Welcome'
import About from './About/index'
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
              <Element name="WELCOME">
                <Welcome/>
              </Element>

              <Element name="ABOUT">
                <About data={this.state.p}/>
              </Element>

              <Element name="COURSE">
                <RelatedCouse/>
              </Element>

              <Element name="ACHIEVEMENT">
                <Award/>
              </Element>

              <Element name="EXPERIENCE">
                <Project/>
              </Element>

              <Navbar/>
            </div>)
  }
}

export default Container
