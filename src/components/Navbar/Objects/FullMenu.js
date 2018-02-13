import React from 'react'
import Hamburger from './Hamburger'
import Item from './Item'

const element = ['WELCOME' , 'ABOUT' , 'COURSE' , 'ACHIEVEMENT' , 'EXPERIENCE']

class FullMenu extends React.Component {

  getItem() {
    return element.map((item,i) => {
      return <Item name={item} key={i} visible={true} toggle={this.props.toggle}/>
    })
  }

  render() {
    return (<div>
              <div className="nav-full">
                <div className="nav-center">
                  <div className="">
                    <Hamburger toggle={this.props.toggle}/>
                    {this.getItem()}
                  </div>
                </div>
              </div>
            </div>)
  }
}

export default FullMenu
