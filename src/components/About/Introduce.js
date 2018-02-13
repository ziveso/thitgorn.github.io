import React from 'react'
import './Introduce.css'

var content = {
  header: 'Thitiwat Thongbor',
  content: (
    <h5>
      &emsp;Hi! I'm Guy! currently studying Software and Knowledge Engineering at Kasetsart University.
      <br/>Eager to learn new things with newest tools. <br/>Adaptive and Collaborate Person. <br/>Familiar with version control system, design patterns and UNIX command. <br/>
      <b>"I'm Also looking for any internship program."</b>
    </h5>
  )
}

class Introduce extends React.Component {
  render(){
    return (<div className="Introduce">
              {content.content}
            </div>)
  }
}

export default Introduce
