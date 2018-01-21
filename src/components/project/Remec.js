import React from 'react'
import './central.css'
import remec from '../../images/remec.png'
import Card from '../Card'

const title = "Remec"
const description = "test"
const repo = "https://github.com/thitgorn/Remec"
const page = "https://thitgorn.github.io/Remec"
class Remec extends React.Component {
  render() {
    return <Card img={remec} title={title} description={description} repo={repo} page={page}/>
  }
}

export default Remec;
