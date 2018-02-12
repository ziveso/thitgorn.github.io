import React from 'react'
import './central.css'
import bcbk from '../../images/barcamp.png'
import bcbkgif from '../../images/gif/barcamp.gif'
import Card from '../Card/Card'

const title = "BCBK 8"
const description = "Barcamp Bangkhen 8 website. Tools - React, Repo is private."
const repo = null;
const page = "http://2017.barcampbangkhen.org"
class Barcamp extends React.Component {
  render() {
    return <Card img={bcbk} gif={bcbkgif} title={title} description={description} repo={repo} page={page}/>
  }
}

export default Barcamp;
