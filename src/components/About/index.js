import React from 'react'
import Me from './Me'
import './About.css'
import Skill from './Skill'
import Introduce from './Introduce'
import Github from './Me'

class index extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.data.data);
  }
  render() {
    return (<div className="about-fullscreen">
                <div className='row'>
                    <div className='col-sm-12 col-md-4'>
                      <Me img={this.props.data.data.img}/>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                      <Introduce/>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                      <Github/>
                    </div>
                  </div>
              <Skill/>
          </div>)
  }
}

export default index
