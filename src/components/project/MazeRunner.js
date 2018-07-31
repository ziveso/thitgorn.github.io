import React from 'react'
import './central.css'
import Mazerunncer from '../../images/MazeRunner.png'
import Card from '../Card/Card'
// import MazeGIF from '../../images/gif/maze.gif'

const title = "Maze Runner"
const description = "Find the exit path of maze. Tools - JAVA"
const repo = "https://github.com/ziveso/MazeRunner"
const page = null
class MazeRunner extends React.Component {
  render() {
    return <Card img={Mazerunncer} title={title} description={description} repo={repo} page={page}/>
  }
}

export default MazeRunner
