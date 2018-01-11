import React from 'react'
import '../components/Profile.css'

class Profile extends React.Component{

  constructor(props) {
    super(props)
    this.state = props.data.data;
  }

  render() {
    return (<div className='app'>
              <div className='layout'>
                <img className='img' src={this.state.img} alt={this.state.img}/>
                <div>
                  <h1>{this.state.name}</h1>
                  <h3>{this.state.username}</h3>
                  <h3>follower : {this.state.follower}</h3>
                  <h3>following : {this.state.following}</h3>
                </div>
              </div>
            </div>)
  }
}

export default Profile
