import React from 'react'

var content = {
  header: 'Thitiwat Thongbor',
  content: "Hi! I'm Guy! currently studying Software and Knowledge Engineering at Kasetsart University. Eager to learn new things with newest tools. Adaptive Person and High skill with teamwork!. \nI'm Also looking for any internship program."
}

class About extends React.Component {
  getContent() {
    // seperate line
    var cont = content.content
    return cont;
  }
  render () {
    return (<div className="container">
              <h1>{content.header}</h1>
              <div>{this.getContent()}</div>
              <h1>SKILL</h1>
              <div>JAVA : 90%</div>
              <div>C : 90%</div>
              <div>C++ : 30%</div>
              <div>RUBY : 30%</div>
              <div>JAVASCRIPT : 70%</div>
              <div>CSS : 60%</div>
              <div>HTML : 100%</div>
              <div>REACT : 90%</div>
              <div>JQUERY : 50%</div>
            </div>)
  }
}

export default About;
