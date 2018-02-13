import React from 'react'
import localhackday from '../../images/localhackday.png'
import Card from '../Card/Card'

const title = "LOCAL HACKDAY - Hackaton 2016"
const description = "1st Place Local Hackday host by Github and Major Hack league. Tools - Android, JAVA"
const repo = "https://github.com/thitgorn/TouchYou_Hackaton"
class Award extends React.Component {
  render() {
    return (<div style={{width:`100%` , height:`100vh`}}>
                <h1>ACHIEVEMENT</h1>
                <div className="row container">
                  <div className="col-md-4">
                    <Card img={localhackday} title={title} description={description} repo={repo} />
                  </div>
                </div>
            </div>)
  }
}

export default Award
