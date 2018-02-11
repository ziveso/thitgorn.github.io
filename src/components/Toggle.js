import React from 'react'
import '../components/Toggle.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { element : props.element }
    this.getImage = this.getImage.bind(this)
  }

  getImage() {
    console.log(this.state.element);
     return <ImageGallery items={this.state.element} />
  }

  // getImage() {
  //   return this.state.element.map( i=> {
  //     return (<div>{i}</div>)
  //   })
  // }

  getToggle() {
    if(this.props.click===true) {
      return (<div id='toggle'>
                  <div className="Togglelayout">
                    <div className="right" onClick={this.props.toggle}>X</div>
                    <div>{this.getImage()}</div>
                  </div>
              </div>)
    }
    return null;
  }

  render () {
    return (<div>{this.getToggle()}</div>)
  }
}

export default Toggle