import React from 'react'
import Barcamp from '../components/project/Barcamp'
import DisasterBox from '../components/project/DisasterBox'
import Remec from '../components/project/Remec'
import SkeChayen from '../components/project/SkeChayen'
import Smarthouse from '../components/project/Smarthouse'

class Project extends React.Component {
  render() {
    return (<div>
              <h1>WORK EXPERIENCE</h1>
              <div className="row">
                <div className="col-sm-3">
                  <Barcamp/>
                </div>
                <div className="col-sm-3">
                  <DisasterBox/>
                </div>
                <div className="col-sm-3">
                  <Remec/>
                </div>
                <div className="col-sm-3">
                  <SkeChayen/>
                </div>
                <div className="col-sm-3">
                  <Smarthouse/>
                </div>
              </div>
            </div>);
  }
}

export default Project;
