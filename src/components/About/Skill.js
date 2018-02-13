import React from 'react'
import './Skill.css'

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

class Skill extends React.Component {
  constructor() {
    super()
    this.state = { visible: false}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({visible : !this.state.visible})
  }

  getSkills() {
    return skills.map((item,i) => {
        var percent = item.percent;
        return (<div key={i} className="progress" style={{width: `${percent}%`}}>
                  <div className={`progress-bar control bg-grey`} role="progressbar" style={{width: `100%`}}>{item.text} - {item.percent} %</div>
                </div>)
    })
  }

  render() {
    return (<div>
              <div className="skill-wrapper">
                <div onClick={ () => {this.handleClick()}} className="toggler">SKILLS</div>
                <div align="right" className="skill-progress">{this.getSkills()}</div>
              </div>
            </div>)
  }
}

export default Skill
