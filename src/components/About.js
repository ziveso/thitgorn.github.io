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

const skills = [ {
  text:"JAVA",
  percent:80
}, {
  text:"C",
  percent:75
}, {
  text:"React",
  percent:70
}, {
  text:"Javascript",
  percent:65
}, {
  text:"Jquery",
  percent:60
}, {
  text:"CSS",
  percent:50
}, {
  text:"SCSS",
  percent:40
}, {
  text:"Python",
  percent:35
}, {
  text:"Ruby",
  percent:30
} ]

class About extends React.Component {
  getSkills() {
    return skills.map( (skill)=> {
      var color = null
      if(skill.percent >= 70)
        color = "bg-red"
      else if (skill.percent > 50)
        color = "bg-orange"
      else if (skill.percent > 35)
        color = "bg-blue"
      else
        color = "bg-green"

      return (<div>
                <div className="progress">
                  <div className={`progress-bar control ${color}`} role="progressbar" style={{width: `${skill.percent}%`}} >{skill.text} - {skill.percent} %</div>
                </div>
              </div>)
    })
  }
  render () {
    return (<div className="container">
              <h1>{content.header}</h1>
              <div className="Paragraph">{content.content}</div>
              <h1>SKILL</h1>
              <div className="skill container">
                {this.getSkills()}
              </div>
            </div>)
  }
}

export default About;