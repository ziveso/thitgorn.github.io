import React from 'react'
import Me from './Me'
import './About.css'
import Skill from './Skill'
import Introduce from './Introduce'
import Github from './Github'

class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { i:0 }
    this.handleBack = this.handleBack.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  handleNext(){
    var next = this.state.i+1;
    if(next>2){
      next = 0;
    }
    this.setState({ i : next})
  }

  handleBack(){
    var next = this.state.i-1;
    if(next<0){
      next = 2;
    }
    this.setState({ i : next})
  }

  render() {
    var data = this.props.data.data
    return (<div className="about-fullscreen">
                <div className="showOnMobile">
                    { (this.state.i===0) && <div className="animate"><Me img={data.img}/></div>}
                    { (this.state.i===1) && <div className="animate"><Introduce/></div>}
                    { (this.state.i===2) && <div className="animate"><Github data={data}/></div>}
                    <div className="next arrow" onClick={()=>{this.handleNext()}}></div>
                    <div className="back arrow" onClick={()=>{this.handleBack()}}></div>
                </div>
                <div className="hideOnMobile">
                  <div className='row' style={{width:`100%` , margin:'auto'}}>
                    <div className='col-sm-12 col-md-4'>
                      <Me img={data.img}/>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                      <Introduce/>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                      <Github data={data}/>
                    </div>
                  </div>
                </div>
              <Skill/>
          </div>)
  }
}

export default index
