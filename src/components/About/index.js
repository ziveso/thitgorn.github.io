import React from 'react'
import Profile from './Profile'
import About from './About'

class index extends React.Component {
  render() {
    return (<div className="about-fullscreen">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <Profile data={this.props.data}/>
                  </div>
                  <div className="col-md-8">
                    <About />
                  </div>
                </div>
              </div>
            </div>)
  }
}

export default index
