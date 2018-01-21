import React from 'react'
import chayen from '../../images/chayen.png'
import Card from '../Card'


const title = "SkeChayen"
const description = "test"
const repo = ""
class SkeChayen extends React.Component {
  render() {
    return <Card img={chayen} title={title} description={description} repo={repo} />
  }
}

export default SkeChayen;
