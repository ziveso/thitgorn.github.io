import React from 'react'
import './Introduce.css'
import grassImg from '../../../images/grass.png'

var content = {
  header: 'Thitiwat Thongbor',
  content: (
    <h5>
      &emsp;Hi! I'm Guy!<br/>Software and Knowledge Engineering Student.<br/>I'm eager to learn new things with newest tools.
      Adaptive and Collaborate Person. Familiar with version control system, design patterns and UNIX command.
      <br/><br/><b>"I'm Also looking for any internship program."</b>
    </h5>
  )
}

class Introduce extends React.Component {
  render(){
    return (<div style={{border:'1px solid rgb(199,218,205)'}}>
              <div className="Introduce container">
                {content.content}
              </div>
              <div align="center">
                <img src={grassImg} style={{width:`50%`, margin:'50px 0 0 0'}}/>
              </div>
            </div>)
  }
}

export default Introduce
