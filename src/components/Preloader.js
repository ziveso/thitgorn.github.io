import React from 'react'
import Spinner from './../images/gif/spinner.gif'

class Preloader extends React.Component {
  render() {
    return (<div>
                <img src={Spinner} className="Spinner"/>
            </div>)
  }
}

export default Preloader
