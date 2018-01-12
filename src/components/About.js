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

class About extends React.Component {

  render () {
    return (<div className="container">
              <h1>{content.header}</h1>
              <div className="Paragraph">{content.content}</div>
              <h1>SKILL</h1>
              <div className="row skill">
                <div className="col-md-3">JAVA</div>
                <div className="col-md-1">:</div>
                    <div className="progress">
                      <div className="progress-bar bg-dark" style={{width: "90%"}}></div>
                    </div>
                <div className="col-md-3">C</div>
                    <div className="col-md-1">:</div>
                    <div className="progress">
                      <div className="progress-bar bg-dark" style={{width: "90%"}}></div>
                    </div>
                <div className="col-md-3">C++</div>
                    <div className="col-md-1">:</div>
                    <div className="progress">
                      <div className="progress-bar bg-dark" style={{width: "30%"}}></div>
                    </div>
                <div className="col-md-3">RUBY</div>
                    <div className="col-md-1">:</div>
                    <div className="progress">
                      <div className="progress-bar bg-dark" style={{width: "30%"}}></div>
                    </div>
                <div className="col-md-3">JAVASCRIPT</div>
                    <div className="col-md-1">:</div>
                    <div className="progress">
                      <div className="progress-bar bg-dark" style={{width: "70%"}}></div>
                    </div>
                <div className="col-md-3">CSS</div>
                    <div className="col-md-1">:</div>
                    <div className="progress">
                      <div className="progress-bar bg-dark" style={{width: "60%"}}></div>
                    </div>
                <div className="col-md-3">HTML</div>
                    <div className="col-md-1">:</div>
                    <div className="progress">
                      <div className="progress-bar bg-dark" style={{width: "100%"}}></div>
                    </div>
                <div className="col-md-3">REACT</div>
                    <div className="col-md-1">:</div>
                    <div className="progress">
                      <div className="progress-bar bg-dark" style={{width: "90%"}}></div>
                    </div>
                <div className="col-md-3">JQUERY</div>
                    <div className="col-md-1">:</div>
                    <div className="progress">
                      <div className="progress-bar bg-dark" style={{width: "50%"}}></div>
                    </div>
              </div>
            </div>)
  }
}

export default About;
