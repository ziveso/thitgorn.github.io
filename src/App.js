import React, { Component } from 'react'
import Welcome from './components/Welcome'
import About from './components/About'
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
                     img: ""}
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
                       img: data.avatar_url} )
    }).catch()
  }

  getAbout() {
    if(this.state.username==="") {
      // do loading here
      return <Loading/>
    } else
    return <About data={this.state}/>
  }

  render() {
    return (
      <div>
        <Welcome/>
        <div>{this.getAbout()}</div>
      </div>
    );
  }
}

export default App;
