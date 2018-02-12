import React from 'react'
import Barcamp from '../components/project/Barcamp'
import DisasterBox from '../components/project/DisasterBox'
import Remec from '../components/project/Remec'
import SkeChayen from '../components/project/SkeChayen'
import Smarthouse from '../components/project/Smarthouse'
import MazeCreater from '../components/project/MazeCreater'
import MazeRunner from '../components/project/MazeRunner'
import TillingBlock from '../components/project/TillingBlock'
import XOai from '../components/project/XOai'

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
