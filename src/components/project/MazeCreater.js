import React from 'react'
import './central.css'
import Mazecreater from '../../images/MazeCreater.png'
import Card from '../Card/Card'

const title = "Maze Generator"
const description = "Create the maze with non-cycle. Tools - C"
const repo = "https://github.com/thitgorn/MazeGenerator"
const page = null
class MazeCreater extends React.Component {
  render() {
    return <Card img={Mazecreater} title={title} description={description} repo={repo} page={page}/>
  }
}

export default MazeCreater
