import React from 'react'

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

class SkillMobile extends React.Component {

  getSkills() {
    return skills.map((item,i) => {
        var percent = item.percent;
        return (<div key={i} className="progress progress-bar-github" style={{width: `${percent}%`}}>
                  <div className={`progress-bar`} role="progressbar" style={{width: `100%`}}>{item.text} - {item.percent} %</div>
                </div>)
    })
  }

  render() {
    return (<div style={{height:`80vh`,width:`100%`}}>
                <h1 style={{padding:`5vh 0 0 0`}} align="center">SKILLS</h1>
                <div align="right" className="skill-progress">{this.getSkills()}</div>
            </div>)
  }
}

export default SkillMobile
