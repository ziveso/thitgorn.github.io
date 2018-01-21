import React from 'react'
import chayen from '../../images/chayen.png'
import Card from '../Card'


const title = "SkeChayen"
const description = "Guessing the words Game. Tools - node.js, Jquery"
const repo = "https://github.com/thitgorn/ske-chayen"
const page = null
class SkeChayen extends React.Component {
  render() {
    return <Card img={chayen} title={title} description={description} repo={repo} page={page}/>
  }
}

export default SkeChayen;
