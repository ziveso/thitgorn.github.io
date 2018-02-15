import React from 'react'
import './Item.css'
import { scroller } from 'react-scroll'


class Item extends React.Component {
  handleScroller() {
    scroller.scrollTo(this.props.name, {
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
    })
    this.props.toggle()
  }

  render() {
    return (<div className="item text-center">
                <div className="line-item">
                    {this.props.visible && <div className="pointer text-mobile" onClick={ ()=>{this.handleScroller()}}>{this.props.name}</div>}
                  </div>
            </div>)
  }
}

export default Item
