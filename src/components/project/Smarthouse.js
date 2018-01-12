import React from 'react'
import './central.css'
import sh1 from '../../images/sh1.JPG'
import sh2 from '../../images/sh2.JPG'

class Smarthouse extends React.Component {
  render() {
    return (<div>
                <h3>Smarthouse</h3>
                <div className="showcase">
                  <img src={sh1} className="img-responsive" alt="sh1" />
                  <img src={sh2} className="img-responsive" alt="sh2" />
                </div>
            </div>)
  }
}

export default Smarthouse;
