import React from 'react'
import './Welcome.css'
import { scroller } from 'react-scroll'

var style = {
  display: 'flex' ,
};

const USERNAME = "user $:"
const Greeting = "login as unknown user\n\ncat README.txt\n"
const README =
`Portfolio website\nThitiwat Thongbor - SOFTWARE DEVELOPER\n\n
see command run cmd\n=============\n`

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: Greeting + README + USERNAME};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCommand = this.handleCommand.bind(this);
  }


  scroll() {
    scroller.scrollTo('ABOUT', {
      duration: 1000,
      delay: 50,
      smooth: "easeInQuad",
    })
  }

  handleChange(event) {
    if (event.target.value.substring(event.target.value.length-6 , event.target.value.length)==='user $')
      event.target.value=event.target.value+":"
    var inputChar = event.target.value.charAt(event.target.value.length-1)
    this.setState({value: event.target.value})
    if(inputChar==='\n') {
      var cmd = this.getCommand()
      if(cmd==="Enter") {
        this.setState({value: event.target.value + USERNAME})
      } else if(cmd=="clear"){
        this.setState({value: USERNAME})
      } else {
        var output = this.handleCommand(cmd)
        this.setState({value: event.target.value + output + "\n" + USERNAME})
      }
    }
  }

  getCommand() {
    var s = this.state.value.split(USERNAME)
    var a = s[s.length - 1]
    a = a.trim()
    if(a=="")
      return "Enter"
    return a
  }

  handleCommand(cmd) {
    var output = ""
    console.log(cmd);
    switch(cmd) {
      case "Enter": break;
      case "next": output = "next()"; this.scroll(); break;
      case "whoami": output = "Thitiwat Thongbor"; break;
      case "clear": output = "clear";break;
      default: output = "command not found: " + cmd;
    }
    return output
  }

  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    return (<div className="welcome">
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <textarea type="text" value={this.state.value}
                    onChange={this.handleChange}
                    style={{background:`black`,color:`green`,width:`100%`,height:`100vh`}}>
                    </textarea>
                    </div>
                </form>
            </div>)
  }
}

export default Welcome
