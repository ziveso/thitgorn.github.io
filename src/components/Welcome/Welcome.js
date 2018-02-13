import React from 'react'
import './Welcome.css'
import { scroller } from 'react-scroll'


var style = {
  display: 'flex' ,
    };

class Welcome extends React.Component {
  scroll() {
    scroller.scrollTo('ABOUT', {
      duration: 1000,
      delay: 50,
      smooth: "easeInQuad",
    })
  }

  render() {
    return (<div className="welcome">
                <div className="header">
                  <h1 style={style}>
                    <strong>Hi, I'm Thitiwat Thongbor.</strong>
                  </h1>
                    SOFTWARE AND KNOWLEDGE ENGINEERING
                </div>
                <div className="abc" onClick={this.scroll}>
                  <div className="arrow bounce"></div>
                </div>
            </div>)
  }
}

export default Welcome
