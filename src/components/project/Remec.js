import React from 'react'
import './central.css'
import remec1 from '../../images/remec1.png'
import remec2 from '../../images/remec2.png'
import remec3 from '../../images/remec3.png'

class Remec extends React.Component {
  render() {
    return (<div>
                <h3>Remec</h3>
                <div className="showcase">
                  <img src={remec1} className='img-responsive' alt='remec1'/>
                  <img src={remec2} className='img-responsive' alt='remec2'/>
                  <img src={remec3} className='img-responsive' alt='remec3'/>
                </div>
            </div>);
  }
}

export default Remec;
