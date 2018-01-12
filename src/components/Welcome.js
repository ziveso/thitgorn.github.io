import React from 'react'
import './Welcome.css'

var style = {
  display: 'flex' ,
    };

class Welcome extends React.Component {
  render() {
    return (<div className="welcome">
                <div className="header">
                  <h1 style={style}>
                    <strong>Hi, I'm Thitiwat Thongbor.</strong>
                  </h1>
                    SOFTWARE AND KNOWLEDGE ENGINEERING
                </div>
                <div className="arrow bounce"></div>
            </div>)
  }
}

export default Welcome
