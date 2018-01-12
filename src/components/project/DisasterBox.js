import React from 'react'
import './central.css'
import disas1 from '../../images/disas1.jpg'
import disas2 from '../../images/disas2.jpg'
import disas3 from '../../images/disas3.jpg'
import disas4 from '../../images/disas4.jpg'
import disas5 from '../../images/disas5.jpg'
import disas6 from '../../images/disas6.JPG'

class DisasterBox extends React.Component {
  render() {
    return (<div>
                <h3>Disaster-box</h3>
                <div className="showcase">
                  <img src={disas1} className='img-responsive' alt='disas1'/>
                  <img src={disas2} className='img-responsive' alt='disas2'/>
                  <img src={disas3} className='img-responsive' alt='disas3'/>
                  <img src={disas4} className='img-responsive' alt='disas4'/>
                  <img src={disas5} className='img-responsive' alt='disas5'/>
                  <img src={disas6} className='img-responsive' alt='disas6'/>
                </div>
            </div>);
  }
}

export default DisasterBox;
