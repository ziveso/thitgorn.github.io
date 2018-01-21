import React from 'react'
import '../components/About.css'

var content = {
  header: 'Thitiwat Thongbor',
  content: (
    <span>
      Hi! I'm Guy! currently studying Software and Knowledge Engineering at Kasetsart University.<br/>
      Eager to learn new things with newest tools. Adaptive Person and High skill with teamwork!. <br/>
      I'm Also looking for any internship program.
    </span>
  )
}
// java 90
// C 90
// c++ 30
// ruby 30
// javascript 70
// css 60
// html 100
// react 80
// JQUERY 50
class About extends React.Component {

  render () {
    return (<div className="container">
              <h1>{content.header}</h1>
              <div className="Paragraph">{content.content}</div>
              <h1>SKILL</h1>
              <div className="skill container">
                <div className="progress">
                  <div className="progress-bar bg-dark" role="progressbar" style={{width: "90%"}} >JAVA - 90%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-dark" role="progressbar" style={{width: "80%"}}>C - 80%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-dark" role="progressbar" style={{width: "30%"}}>C++ - 30%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-dark" role="progressbar" style={{width: "30%"}}>Ruby - 30%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-dark" role="progressbar" style={{width: "70%"}}>Javascript - 70%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-dark" role="progressbar" style={{width: "60%"}}>CSS - 60%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-dark" role="progressbar" style={{width: "100%"}}>HTML - 100%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-dark" role="progressbar" style={{width: "80%"}}>React - 80%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-dark" role="progressbar" style={{width: "50%"}}>Jquery - 50%</div>
                </div>
              </div>
            </div>)
  }
}

export default About;
