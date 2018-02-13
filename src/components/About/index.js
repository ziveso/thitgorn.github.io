import React from 'react'
import Me from './Me'
import './About.css'
import Skill from './Skill'

class index extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.data.data);
  }
  render() {
    return (<div className="about-fullscreen">
                <Me img={this.props.data.data.img}/>
                <Skill/>
            </div>)
  }
}

export default index
