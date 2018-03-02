import React from 'react'
import './Feed.css'

import commitImg from './images/commit.png'
import pull_requestImg from './images/git-pull-request.png'
import pushImg from './images/repo-push.ico'
import starImg from './images/star.png'
import forkImg from './images/fork.png'
import issueImg from './images/issue.png'

class Feed extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      item : props.item ,
      id : props.id
    }
  }

  getURL() {
    const url = "https://www.github.com/" + this.state.item.repo.name;
    return url;
  }

  getItem() {
    var item = this.state.item;
    var id = this.state.id;
    if(item===null) {
      return null;
    }
    switch(item.type){
      case 'PullRequestEvent':
            return (<div key={id}><img src={pull_requestImg} alt="pull_request" height="16px" width="16px"/> {item.repo.name}
                        <div align="left" style={{margin:"0 0 0 20px"}}><img src={commitImg} height="32px" width="32px" alt="commit"/>{item.payload.pull_request.head.repo.full_name}</div>
                  </div>);
      case 'PushEvent':
            return <div key={id}><img src={pushImg} alt="pushImg" height="16px" width="16px"/> {item.repo.name}{item.payload.commits.map((item,ids) => {
              return <div key={ids} align="left" style={{margin:"0 0 0 20px"}}><img src={commitImg} height="32px" width="32px" alt="commit"/>{item.message}</div>
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
  }

  render() {
    return (
            <div className="item-Border">
              <a href={this.getURL()} target="_blank" className="linkGithub">{this.getItem()}</a>
            </div>
          )
  }
}

export default Feed;
