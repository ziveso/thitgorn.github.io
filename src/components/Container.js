import React from 'react'
import Welcome from '../components/Welcome'
import Profile from '../components/Profile'
import About from '../components/About'
import Award from '../components/Award'
import Project from '../components/Project'
import RelatedCouse from '../components/RelatedCouse'
import '../components/Container.css'
import { Element } from 'react-scroll'

class Container extends React.Component {

  constructor( props ) {
    super( props )
    this.state = {
      p : props,
    }
  }


  render() {
    return (<div>
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
                <RelatedCouse/>
                <Award/>
                <Project/>
              </div>
            </div>)
  }
}

export default Container
