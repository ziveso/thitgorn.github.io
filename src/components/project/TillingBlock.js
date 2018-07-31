import React from 'react'
import './central.css'
import Tillingblock from '../../images/TillingBlock.png'
import Card from '../Card/Card'
import gifimg from '../../images/gif/block.gif'

const title = "Till L Block"
const description = "Tilling L Block to the 2^n grid. Tools - JAVA"
const repo = "https://github.com/ziveso/BlockTilling"
const page = null
class TillingBlock extends React.Component {
  render() {
    return <Card img={Tillingblock} gif={gifimg} title={title} description={description} repo={repo} page={page}/>
  }
}

export default TillingBlock
