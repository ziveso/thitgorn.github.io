import React from 'react'
import './central.css'
import XO_ai from '../../images/XO_AI.png'
import Card from '../Card'

const title = "XO bot"
const description = "Unwinable bot XO at 3x3. Tools - JAVA"
const repo = "https://github.com/thitgorn/OX_ai";
const page = null
class XOai extends React.Component {
  render() {
    return <Card img={XO_ai} title={title} description={description} repo={repo} page={page}/>
  }
}

export default XOai;
