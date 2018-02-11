import React from 'react'

var AlwaysOnT = {
  position: "fixed",
  height: `90vh`,
  width: `90%`,
  margin: `5vh 5% 5vh 5%`,
  background: "black"
}

class Popup extends React.Component {
  render() {
    return (<div style={AlwaysOnT}>
                <img src={this.props.img} alt={this.props.img} width={`100%`} height={`100%`}/>
            </div>)
  }
}

export default Popup;
