import React from 'react'
import './central.css'
import smarthouse from '../../images/smarthouse.png'
import Card from '../Card'

const title = "Smarthouse"
const description = "Automatic Etectric switch in house. Tools - Jquery"
const repo = "https://github.com/thitgorn/smarthouse"
class Smarthouse extends React.Component {
  render() {
    return <Card img={smarthouse} title={title} description={description} repo={repo} />
  }
}

export default Smarthouse;
