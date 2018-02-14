import React from 'react'
import './Github.css'

class Github extends React.Component {
  componentDidMount(){
    console.log(this.props.data);
  }

  findDigit(number) {
    number = parseInt(number , 10)
    if(number/10===0)
      return 0;
    return this.findDigit(number/10) + 1;
  }

  power(number) {
    return Math.pow(10,parseInt(number,10),10)
  }

  getW(number) {
    return (number/this.power(this.findDigit(number)))*100
  }
  render() {
    return (<div className="Github container">
              <img src="https://assets-cdn.github.com/images/modules/site/logos/desktop-logo.png" className="github-img" alt="GITHUB-LOGO" />
              <h2>MY GITHUB STATUS</h2>
              <h5>
                Username : <a href="https://github.com/thitgorn">{this.props.data.username}</a>
              </h5>
              <div align="left">
                Following
              </div>
              <div className="progress">
                <div className="progress-bar" style={{width: `${this.getW(this.props.data.following)}%`}}>{this.props.data.following}/{this.power(this.findDigit(this.props.data.following))}</div>
              </div>
              <div align="left">
                Follower
              </div>
              <div className="progress">
                <div className="progress-bar" style={{width: `${this.getW(this.props.data.follower)}%`}}>{this.props.data.follower}/{this.power(this.findDigit(this.props.data.follower))}</div>
              </div>
              <div align="left">
                Public repos
              </div>
              <div className="progress">
                <div className="progress-bar" style={{width: `${this.getW(this.props.data.public_repos)}%`}}>{this.props.data.public_repos}/{this.power(this.findDigit(this.props.data.public_repos))}</div>
              </div>
            </div>)
  }
}

export default Github;
