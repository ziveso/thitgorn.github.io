import React from 'react'
import localhackday1 from '../images/localhackday1.jpg'
import localhackday2 from '../images/localhackday2.jpg'
import localhackday3 from '../images/localhackday3.png'
import localhackday4 from '../images/localhackday4.jpg'

class Award extends React.Component {
  render () {
    return (<div>
              <h1>AWARD / ACHIEVEMENT</h1>
              <div>1st LOCAL HACKDAY - Hackaton 2017</div>
              <img src={localhackday3} className="img-responsive" alt="localhackday3"/>
              <img src={localhackday1} className="img-responsive" alt="localhackday1"/>
              <img src={localhackday2} className="img-responsive" alt="localhackday2"/>
              <img src={localhackday4} className="img-responsive" alt="localhackday4"/>
            </div>);
  }
}

export default Award
