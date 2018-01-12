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
              <Barcamp/>
              <DisasterBox/>
              <Remec/>
              <SkeChayen/>
              <Smarthouse/>
            </div>);
  }
}

export default Project;
