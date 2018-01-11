import React from 'react'
import content from '../lib/aboutContent'

class About extends React.Component {
  render () {
    return (<div>
              <h1>{content.header}</h1>
              <div>{content.content}</div>
            </div>)
  }
}

export default About;
