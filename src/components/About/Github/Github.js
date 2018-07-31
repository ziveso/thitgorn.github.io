import React from 'react'
import './Github.css'
import NewFeed from './NewFeed'


class Github extends React.Component {

  findDigit(number) {
    number = parseInt(number , 10)
    if(number/10===0)
      return 0
    return this.findDigit(number/10) + 1
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
              <div align="center">
              <iframe src="https://ghbtns.com/github-btn.html?user=ziveso&type=follow&count=true&size=large" frameBorder="0" scrolling="0" width="220px" height="30px" title="github"></iframe>
              </div>
              <div align="left">
                Public repos
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-github" style={{width: `${this.getW(this.props.data.public_repos)}%`}}>{this.props.data.public_repos}/{this.power(this.findDigit(this.props.data.public_repos))}</div>
              </div>
              <div>
                <NewFeed />
              </div>
            </div>)
  }
}

export default Github
