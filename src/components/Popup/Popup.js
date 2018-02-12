import React from 'react'
import './Popup.css'
import ImageLoader from 'react-load-image';
import Preloader from '../Preloader'

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
                <div className="AlwaysOnT" onKeyDown={(event)=>{ event.key==='Escape'? this.props.hide():console.log() }} tabIndex="0">
                    <ImageLoader
                      src={this.props.img}
                    >
                      <img width={`100%`} height={`100%`} alt={this.props.img}/>
                      <Preloader />
                      <Preloader />
                    </ImageLoader>
                </div>
            </div>)
  }
}

export default Popup;
