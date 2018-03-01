import React from 'react'
import './Github.css'
import Axios from 'axios'
import ReactInterval from 'react-interval'
import commitImg from './images/commit.png'
import pull_requestImg from './images/git-pull-request.png'
import pushImg from './images/repo-push.ico'
import starImg from './images/star.png'
import forkImg from './images/fork.png'
import issueImg from './images/issue.png'

const URL = 'https://api.github.com/users/thitgorn/events'

class Github extends React.Component {
  constructor(props) {
    super(props)
    this.state = { feed : 'loading' }
    this.getNewFeedData = this.getNewFeedData.bind(this)
  }

  componentWillMount() {
    this.getNewFeedData()
  }

  getNewFeedData() {
    Axios.get(URL).then( (response)=>{
      var top3 = response.data.slice(0,3)
      this.setState( {feed : top3})
    }).catch( (err)=>{
      console.log(err);
    })
  }

  getNewFeedTable() {
    if(this.state.feed === 'loading') {
      return null
    }
    return (<div>{this.state.feed.map((item,id) => {
        switch(item.type){
          case 'PullRequestEvent':
                return (<div key={id}><img src={pull_requestImg} alt="pull_request" height="16px" width="16px"/> {item.repo.name}
                            <div align="left" style={{margin:"0 0 0 20px"}}><img src={commitImg} height="32px" width="32px" alt="commit"/>{item.payload.pull_request.head.repo.full_name}</div>
                      </div>);
          case 'PushEvent':
                return <div key={id}><img src={pushImg} alt="pushImg" height="16px" width="16px"/> {item.repo.name}{item.payload.commits.map((item,id) => {
                  return <div key={id} align="left" style={{margin:"0 0 0 20px"}}><img src={commitImg} height="32px" width="32px" alt="commit"/>{item.message}</div>
                })}</div>
          case 'WatchEvent':
                return (<div key={id}><img src={starImg} alt="star" height="16px" width="16px"/><span align="left" style={{margin:"0 0 0 7px"}}>{item.repo.name}</span></div>)
          case 'ForkEvent':
                return (<div key={id}><img src={forkImg} alt="fork" height="16px" width="16px"/><span align="left" style={{margin:"0 0 0 7px"}}>{item.repo.name}</span></div>)
          case 'IssuesEvent':
                return (<div key={id}><img src={issueImg} alt="issue" height="16px" width="16px"/><span align="left" style={{margin:"0 0 0 7px"}}>{item.repo.name}</span></div>)
          default:
                return <div key={id}>? at {item.repo.name}</div>
        }
    })}</div>)
  }

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
              <ReactInterval timeout={5000} enabled={true} callback={() => {this.getNewFeedData()}} />
              <img src="https://assets-cdn.github.com/images/modules/site/logos/desktop-logo.png" className="github-img" alt="GITHUB-LOGO" />
              <h2>MY GITHUB STATUS</h2>
              <div align="center">
              <iframe src="https://ghbtns.com/github-btn.html?user=thitgorn&type=follow&count=true&size=large" frameBorder="0" scrolling="0" width="220px" height="30px" title="github"></iframe>
              </div>
              <div align="left">
                Public repos
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-github" style={{width: `${this.getW(this.props.data.public_repos)}%`}}>{this.props.data.public_repos}/{this.power(this.findDigit(this.props.data.public_repos))}</div>
              </div>
              <div align="left">
                <h3>Real Time NEWS FEED</h3>
              </div>
              <div align="left" style={{border:'1px solid black', margin:'0 0 50px 0'}}>
              {this.getNewFeedTable()}
              </div>
            </div>)
  }
}

export default Github
