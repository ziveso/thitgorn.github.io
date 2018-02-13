import React from 'react'
import './Profile.css'

class Me extends React.Component {

  render() {
    return (<div className='text-center profile'>
                  <img src={this.props.img} className='img' alt='profileimage' />
                  <h1>Thitiwat Thongbor</h1>
                  <h5>Software Developer</h5>
            </div>)
  }
}

export default Me
