import React from 'react'
import Popup from '../Popup/Popup'
import './Card.css'

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
      visible : false
    }
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.onKeyPressed = this.onKeyPressed.bind(this)
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

  show() {
      this.setState({ visible: true });
  }

  hide() {
      this.setState({ visible: false });
  }

  getPopUp() {
    if(this.state.visible) {
      if(this.props.gif==null)
          return <Popup img={this.props.img} hide={this.hide}/>
      return <Popup img={this.props.gif} hide={this.hide}/>
    }
    return null
  }

  onKeyPressed(event) {
    if(event.key==='Escape'){
      this.setState({ visible: false })
    }
  }

  render() {
    return (<div className="container" style={style}>
                <div className="card">
                  <img onKeyDown={this.onKeyPressed} tabIndex="0" className="card-img-top img-responsive hoverCursor" src={this.props.img} alt={this.props.img} onClick={()=>{this.show()}}/>
                  <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.description}</p>
                    <div>{this.getBTN()}</div>
                  </div>
                  {this.getPopUp()}
                </div>

            </div>)
  }
}

export default Card
