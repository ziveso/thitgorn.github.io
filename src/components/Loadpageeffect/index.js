import React from 'react'
import './index.css'
import TypeWriter from 'react-typewriter'

class index extends React.Component {

  mounted() {
    this.props.isMount(true)
  }

  render(){
    return (<div className="fullLoad">
                <div className="LoadPage">
                  <TypeWriter maxDelay={150} minDelay={50} typing={1} onTypingEnd={()=>this.mounted()}>
                    <h1>THITIWAT THONGBOR</h1>
                    <h4>Software Developer</h4>
                  </TypeWriter>
                </div>
            </div>)
  }
}

export default index
