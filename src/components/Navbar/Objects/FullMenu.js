import React from 'react'
import Hamburger from './Hamburger'
import Item from './Item'
import './FullMenu.css'

class FullMenu extends React.Component {

  getItem() {
    return this.props.element.map((item,i) => {
      return <Item name={item} key={i} visible={true} toggle={this.props.toggle}/>
    })
  }

  render() {
    return (<div>
              <div className="nav-tran" onClick={()=>{this.props.toggle()}}>
              </div>
              <div className="nav-full">
                <div className="nav-center">
                    <Hamburger toggle={this.props.toggle}/>
                    {this.getItem()}
                </div>
              </div>
            </div>)
  }
}

export default FullMenu
