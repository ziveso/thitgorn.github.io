import React, { Component } from 'react'
import Container from './components/Container'
import Loading from './components/Loading'

import Axios from 'axios'

const URL = 'https://api.github.com/users/thitgorn'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { username: "" ,
                     name: "" ,
                     follower: 0,
                     following: 0,
                     img: "",
                     public_repos: ""}
    this.getAbout = this.getAbout.bind(this)
  }

  componentDidMount() {
    var self = this
    Axios.get(URL).then( function(api) {
      let data = api.data
      self.setState( { username: data.login ,
                       name: data.name ,
                       follower: data.followers ,
                       following: data.following ,
                       img: data.avatar_url ,
                       public_repos: data.public_repos} )
    }).catch()
  }

  getAbout() {
    if(this.state.username==="") {
      // do loading here
      return <Loading/>
    } else
    return <Container data={this.state}/>
  }

  render() {
    return (
      <div>
        <div>{this.getAbout()}</div>
      </div>
    );
  }
}

export default App;
