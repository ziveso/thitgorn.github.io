import React from 'react'
import './central.css'
import bcbk1 from '../../images/bcbk1.png'
import bcbk2 from '../../images/bcbk2.png'

class Barcamp extends React.Component {
  render() {
    return (<div>
                <h3>Barcamp Bangkean</h3>
                <div className="showcase">
                  <img src={bcbk1} className='img-responsive' alt='bcbk1'/>
                  <img src={bcbk2} className='img-responsive' alt='bcbk2'/>
                </div>
            </div>);
  }
}

export default Barcamp;
