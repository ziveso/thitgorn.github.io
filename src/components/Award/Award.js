import React from 'react'
import localhackday from '../../images/localhackday.png'
import Card from '../Card/Card'
import './Award.css'

import intern_image from '../../images/rabbitstale.jpg'

const title = "LOCAL HACKDAY - Hackaton 2016"
const description = "1st Place Local Hackday host by Github and Major Hack league. Tools - Android, JAVA"
const repo = "https://github.com/ziveso/TouchYou_Hackaton"

const intern_title = "Internship at Rabbitstale 2018"
const intern_description = "4 june 2018 - 3 aug 2018  expected tools use : React , Laravel. Currently doing one hour day challenge - at github repo."
const intern_website = "http://www.rabbitstale.com/"
const intern_repo = "https://github.com/ziveso/1hraday-laravel"
class Award extends React.Component {
  render() {
    return (<div className="Award">
                <div style={{width:`100%`}}>
                  <h1 align="center" style={{padding:`2vh 0 0 0`}}>ACHIEVEMENT</h1>
                  <div className="row" style={{width:`100%`}}>
                    <div className="col-md-4">
                      <Card img={localhackday} title={title} description={description} repo={repo} />
                    </div>
                    <div className="col-md-4">
                      <Card img={intern_image} title={intern_title} description={intern_description} repo={intern_repo} page={intern_website} />
                    </div>
                  </div>
                </div>
            </div>)
  }
}

export default Award
