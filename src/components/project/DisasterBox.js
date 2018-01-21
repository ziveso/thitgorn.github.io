import React from 'react'
import './central.css'
import disas from '../../images/disaster.png'
import Card from '../Card'

const title = "DisasterBox"
const description = "test"
const repo = "https://github.com/thitgorn/disaster-box"
const page = "https://thitgorn.github.io/disaster-box"
class DisasterBox extends React.Component {
  render() {
    return <Card img={disas} title={title} description={description} repo={repo} page={page}/>
  }
}

export default DisasterBox;
