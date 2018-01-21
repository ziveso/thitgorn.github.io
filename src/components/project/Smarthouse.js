import React from 'react'
import './central.css'
import smarthouse from '../../images/smarthouse.png'
import Card from '../Card'

const title = "Smarthouse"
const description = "test"
const repo = ""
class Smarthouse extends React.Component {
  render() {
    return <Card img={smarthouse} title={title} description={description} repo={repo} />
  }
}

export default Smarthouse;
