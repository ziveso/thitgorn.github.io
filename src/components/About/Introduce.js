import React from 'react'
import './Introduce.css'

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
    return (<div className="Introduce container">
              {content.content}
            </div>)
  }
}

export default Introduce
