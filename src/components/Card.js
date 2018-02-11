import React from 'react'
import Popup from './Popup'
var style = {
  margin:"15px 5px 5px 5px"
}

var full_width ={
  width: "100%"
}

class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      isClick : false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  getBTN() {
    var a,b
    if(this.props.repo != null) {
      a = <a href={this.props.repo} style={full_width} className="btn btn-primary">Github Repo</a>
    } else {
      a = <a href={this.props.repo} style={full_width} className="btn btn-primary disabled">Github Repo</a>
    }
    if(this.props.page != null) {
      b = <a href={this.props.page} style={full_width} className="btn btn-success">Web Page</a>
    } else {
      b = <a href={this.props.page} style={full_width} className="btn btn-success disabled">Web Page</a>
    }
    return (<div>{a}{b}</div>)
  }

  handleClick() {
    this.setState({isClick:true})
  }

  getPopUP() {
    if(this.state.isClick) {
      return <Popup/>
    }
    return null
  }

  render() {
    return (<div className="container" style={style}>
                <div className="card">
                  <img className="card-img-top img-responsive" src={this.props.img} alt={this.props.img} onClick={()=>{this.handleClick()}}/>
                  <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.description}</p>
                    <div>{this.getBTN()}</div>
                  </div>
                </div>
                <div>{this.getPopUP()}</div>
            </div>)
  }
}

export default Card
