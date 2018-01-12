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
                <div className='container'>
                  <h1>{this.state.name}</h1>
                  <h6>Software Developer</h6>
                  <h3>{this.state.username}</h3>
                  <a herf="mailto:thitiwat.tho1@ku.th">(MAIL): thitiwat.tho1@ku.th</a><br/>

                  <a herf="https://github.com/thitgorn">(GITHUB): https://www.github.com/thitgorn</a><br/>
                  <div>follower : {this.state.follower} following : {this.state.following}</div>

                  <a herf="https://www.facebook.com/thitiwat.thongbor">(FACEBOOK): https://www.github.com/thitgorn</a><br/>

                  <a herf="https://twitter.com/GuyZivesO">(TWITTER): https://www.github.com/thitgorn</a><br/>
                </div>
              </div>
            </div>)
  }
}

export default Profile
