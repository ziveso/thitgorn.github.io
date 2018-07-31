import React from 'react'
import './central.css'
import remec from '../../images/remec.png'
import Card from '../Card/Card'

const title = "Remec"
const description = "Remote Control Application. Tools - Java, Android"
const repo = "https://github.com/ziveso/remec"
const page = "https://ziveso.github.io/remec"
class Remec extends React.Component {
  render() {
    return <Card img={remec} title={title} description={description} repo={repo} page={page}/>
  }
}

export default Remec
