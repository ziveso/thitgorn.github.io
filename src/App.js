import React, { Component } from 'react'
import Container from './components/Container'
import LoadPage from './components/Loadpageeffect/index'

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
                     public_repos: "",
                     isMount:false}
    this.getAbout = this.getAbout.bind(this)
    this.setIsMount = this.setIsMount.bind(this)
  }

  componentWillMount() {
    var self = this
    Axios.get(URL).then( function(api) {
      let data = api.data
      self.setState( { username: data.login ,
                       name: data.name ,
                       follower: data.followers ,
                       following: data.following ,
                       img: data.avatar_url ,
                       public_repos: data.public_repos} )
    }).catch((err)=>{
      console.log(err + " at get data from gtihub");
    })
  }

  setIsMount(bool) {
    this.setState({isMount:bool})
  }

  getAbout() {
    if(this.state.isMount) {
      if(this.state.username==="") {
        return (<div>LOADING</div>)
      } else
      return <Container data={this.state}/>
    } else {
      this.setIsMount(true)
      // return <LoadPage isMount={this.setIsMount}/>
    }
  }

  render() {
    return (
      <div>
        <div>{this.getAbout()}</div>
      </div>
    )
  }
}

export default App
