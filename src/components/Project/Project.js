import React from 'react'
import Barcamp from './Barcamp'
import DisasterBox from './DisasterBox'
import Remec from './Remec'
import SkeChayen from './SkeChayen'
import Smarthouse from './Smarthouse'
import MazeCreater from './MazeCreater'
import MazeRunner from './MazeRunner'
import TillingBlock from './TillingBlock'
import XOai from './XOai'

class Project extends React.Component {
  render() {
    return (<div>
              <h1>WORK EXPERIENCE</h1>
              <h5>(Click picture for more detail)</h5>
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <Barcamp/>
                </div>
                <div className="col-sm-6 col-md-3">
                  <DisasterBox/>
                </div>
                <div className="col-sm-6 col-md-3">
                  <Remec/>
                </div>
                <div className="col-sm-6 col-md-3">
                  <SkeChayen/>
                </div>
                <div className="col-sm-6 col-md-3">
                  <Smarthouse/>
                </div>
                <div className="col-sm-6 col-md-3">
                  <MazeCreater/>
                </div>
                <div className="col-sm-6 col-md-3">
                  <MazeRunner/>
                </div>
                <div className="col-sm-6 col-md-3">
                  <TillingBlock/>
                </div>
                <div className="col-sm-6 col-md-3">
                  <XOai/>
                </div>
              </div>
            </div>);
  }
}

export default Project;
