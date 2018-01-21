import React from 'react'
import localhackday from '../images/localhackday.png'
import Card from './Card'

const title = "LOCAL HACKDAY - Hackaton 2017"
const description = "test"
const repo = "https://github.com/thitgorn/TouchYou_Hackaton"
class Award extends React.Component {
  render() {
    return (<div>
                <h1>ACHIEVEMENT</h1>
                <div className="row">
                  <div className="col-sm-4">
                    <Card img={localhackday} title={title} description={description} repo={repo} />
                  </div>
                </div>
            </div>)
  }
}

export default Award
