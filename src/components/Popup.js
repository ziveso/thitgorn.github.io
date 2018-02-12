import React from 'react'
import './Popup.css'

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: this.props.visible
    }
  }

  render() {
    return (<div>
                <div onClick={()=>{this.props.hide()}} className="fullscreen">
                </div>
                <div className="AlwaysOnT">
                    <img src={this.props.img} alt={this.props.img} width={`100%`} height={`100%`}/>
                </div>
            </div>)
  }
}

export default Popup;
