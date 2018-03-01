import React from 'react'

import Axios from 'axios'
import ReactInterval from 'react-interval'
import Feed from './Feed'

const URL = 'https://api.github.com/users/thitgorn/events'

class NewFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = { feed : 'loading' }
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
      return <Feed item={item} id={id}/>
    })}</div>)
  }

  render() {
    return (
      <div>
        <ReactInterval timeout={5000} enabled={true} callback={() => {this.getNewFeedData()}} />
        <div align="left">
          <h3>Real Time NEWS FEED</h3>
        </div>
        <div align="left">
          {this.getNewFeedTable()}
        </div>
      </div>)
  }
}

export default NewFeed;
