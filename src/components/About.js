import React from 'react'
import './About.css'

class About extends React.Component{

  constructor(props) {
    super(props)
    console.log(props.data);
    this.state = props.data;
  }

  render() {
    return (<div className='App'>
              <div className='flex'>
                <img src={this.state.img} alt={this.state.img}/>
                <div>
                  <h1>{this.state.name}</h1>
                  <h3>{this.state.username}</h3>
                  <h1>follower : {this.state.follower}</h1>
                  <h1>following : {this.state.following}</h1>
                </div>
              </div>
            </div>)
  }
}

export default About
