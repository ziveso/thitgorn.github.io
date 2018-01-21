import React from 'react'
import './central.css'
import Tillingblock from '../../images/TillingBlock.png'
import Card from '../Card'

const title = "Till L Block"
const description = "Tilling L Block to the 2^n grid. Tools - JAVA"
const repo = "https://github.com/thitgorn/BlockTilling";
const page = null
class TillingBlock extends React.Component {
  render() {
    return <Card img={Tillingblock} title={title} description={description} repo={repo} page={page}/>
  }
}

export default TillingBlock;
