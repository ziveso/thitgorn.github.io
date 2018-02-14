import React from 'react'
import Hamburger from './Objects/Hamburger'
import FullMenu from './Objects/FullMenu'
import Item from './Objects/Item'
import './Navbar.css'

const element = ['WELCOME' , 'ABOUT' , 'ACHIEVEMENT' , 'EXPERIENCE' ,'CONTACT']

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      visible : false
    }
    this.hide = this.hide.bind(this)
    this.show = this.show.bind(this)
  }

  show(){
    this.setState({visible:true})
  }

  hide(){
    this.setState({visible:false})
  }

  getItem() {
    return element.map((item,i) => {
      return <Item name={item} key={i} visible={this.state.false}/>
    })
  }

  render() {
    return (<div>
                {!this.state.visible && <div className="nav">
                  <div>
                    <Hamburger toggle={this.show}/>
                    {this.getItem()}
                  </div>
                </div>}
                {this.state.visible && <FullMenu toggle={this.hide} element={element}/>}
            </div>
            )
  }
}
export default Navbar
