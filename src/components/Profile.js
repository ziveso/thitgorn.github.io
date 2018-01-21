import React from 'react'
import '../components/Profile.css'
import Mail from '../images/icon/mail.ico'
import Github from '../images/icon/github.png'
import Facebook from '../images/icon/facebook.ico'
import Twitter from '../images/icon/twitter.png'

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
                  <h4>{this.state.username}</h4>
                  <h1>CONTACT</h1>
                  <a href="mailto:thitiwat.tho1@ku.th"><img src={Mail} style={{width:"32px" , height:"32px"}} alt={Mail}/>: thitiwat.tho1@ku.th</a><br/>

                  <a href="https://github.com/thitgorn"><img src={Github} style={{width:"32px" , height:"32px"}} alt={Github}/>: thitgorn<br/>
                  <div>follower : {this.state.follower} following : {this.state.following}</div></a>

                  <a href="https://www.facebook.com/thitiwat.thongbor"><img src={Facebook} style={{width:"32px" , height:"32px"}} alt={Facebook}/>: thitiwat.thongbor</a><br/>

                  <a href="https://twitter.com/GuyZivesO"><img src={Twitter} style={{width:"32px" , height:"32px"}} alt={Twitter}/>: GuyZivesO</a><br/>
                </div>
              </div>
            </div>)
  }
}

export default Profile
