import React from 'react'
import './Welcome.css'
import Command from './Command'
import { scroller } from 'react-scroll'

const USERNAME = "user $:"
const Greeting = "login as unknown user\n\ncat README.txt\n"
const README =
`Portfolio website\nThitiwat Thongbor - SOFTWARE DEVELOPER\n\n
see command run help\n=============\n`

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: Greeting + README + USERNAME}

    this.handleChange = this.handleChange.bind(this)
    this.handleCommand = this.handleCommand.bind(this)
  }


  scroll() {
    scroller.scrollTo('ABOUT', {
      duration: 1000,
      delay: 50,
      smooth: "easeInQuad",
    })
  }

  handleChange(event) {
    var oldString = this.state.value
    if(!this.checkPositionType(event)) {
      this.setState({value:oldString})
      return
    }
    if (event.target.value.substring(event.target.value.length-6 , event.target.value.length)==='user $')
      event.target.value=event.target.value+":"
    var inputChar = event.target.value.charAt(event.target.value.length-1)
    this.setState({value: event.target.value})
    if(inputChar==='\n') {
      this.handleCommand(this.getCommand() , event)
    }
  }

  checkPositionType(event) {
    var newString = event.target.value
    var oldString = this.state.value
    if(newString.slice(0,-1)===oldString) {
      return true
    }
    if(newString===oldString.slice(0,-1)) {
      return true
    }
    return false
  }
  getCommand() {
    var s = this.state.value.split(USERNAME)
    var a = s[s.length - 1]
    a = a.trim()
    if(a==="")
      return "Enter"
    return a
  }

  handleCommand(cmd,event) {
    var output = ""
    cmd = cmd.toLowerCase()
    switch(cmd) {
      case "enter":
                    this.setState({value: event.target.value + USERNAME})
                    return cmd
      case "next":
                    output = Command.next
                    this.scroll()
                    break
      case "whoami":
                    output = Command.whoami
                    break
      case "clear":
                    this.setState({value: USERNAME})
                    return
      case "about":
                    output = Command.about
                    break
      case "experience":
                    output = Command.experience
                    break
      case "award":
                    output = Command.award
                    break
      case "contact":
                    output = Command.contact
                    break
      case "ls":
                    output = Command.ls
                    break
      case "help":
                    output = Command.help
                    break
      case "cat readme.txt":
                    output = Command.README
                    break
      default: output = "command not found: " + cmd
    }
    this.setState({value: event.target.value + output + "\n" + USERNAME})
    return output
  }

  render() {
    return (<div className="welcome">
                <form>
                    <div>
                    <textarea type="text" value={this.state.value}
                    onChange={this.handleChange}
                    style={{background:`black`,color:`green`,width:`100%`,height:`100vh`}}
                    spellcheck="false">
                    </textarea>
                    </div>
                </form>
                <div className="abc" onClick={this.scroll}>
                    <div className="arrow bounce"></div>
                </div>
            </div>)
  }
}

export default Welcome
