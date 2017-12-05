import React from 'react'
import Axios from 'axios'

const URL = 'https://api.github.com/users/thitgorn'

class Profile extends React.Component{
  constructor(props) {
    super(props)
    this.state = { username : 'LOADING' ,
                   name : 'LOADING' ,
                   follower : 0 ,
                   following : 0 ,
                   img : ''}
  }

  componentDidMount() {
    var self = this
    Axios.get(URL).then( function(api) {
      let data = api.data
      self.setState( { username: data.login ,
                       name: data.name ,
                       follower: data.followers ,
                       following: data.following ,
                       img: data.avatar_url} )
      console.log(api.data);
    }).catch()
  }

  render() {
    return (
              <div>
                <div>PROFILE</div>
                <div><img src={this.state.img} height="100px" width="100px"/></div>
                <div>{this.state.username}</div>
                <div>{this.state.name}</div>
                <div>Follower : {this.state.follower}</div>
                <div>Following : {this.state.following}</div>
              </div>
           )
  }
}

export default Profile
