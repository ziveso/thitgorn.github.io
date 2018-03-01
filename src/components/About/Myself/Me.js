import React from 'react'
import './Profile.css'

class Me extends React.Component {

  render() {
    return (<div className='text-center profile'>
                  <img src={this.props.img} className='img' alt='profileimage' />
                  <h1 style={{margin:'10px 0 0 0'}}>Thitiwat Thongbor</h1>
                  <h5>Software Developer</h5>
                  <h4>Kasetsart University</h4>
            </div>)
  }
}

export default Me
