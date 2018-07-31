import React from 'react'
import './central.css'
import disas from '../../images/disaster.png'
import Card from '../Card/Card'

const title = "DisasterBox"
const description = "Natural Disaster Detector tools. Tools - Jquery"
const repo = "https://github.com/ziveso/disaster-box"
const page = "https://ziveso.github.io/disaster-box"
class DisasterBox extends React.Component {
  render() {
    return <Card img={disas} title={title} description={description} repo={repo} page={page}/>
  }
}

export default DisasterBox
