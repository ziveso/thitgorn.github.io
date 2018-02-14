import React from 'react'
import chayen from '../../images/chayen.png'
import Card from '../Card/Card'
import Gif from '../../images/gif/chayen.gif'

const title = "SkeChayen"
const description = "Guessing the words Game. Tools - node.js, Jquery"
const repo = "https://github.com/thitgorn/ske-chayen"
const page = null
class SkeChayen extends React.Component {
  render() {
    return <Card img={chayen} gif={Gif} title={title} description={description} repo={repo} page={page}/>
  }
}

export default SkeChayen
