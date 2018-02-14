import React from 'react'
import './index.css'

class index extends React.Component {
  componentDidMount() {
    this.props.isMount(true)
    console.log("mounted");
  }

  render(){
    return (<div className="LoadPage development">
              <div className="typewriter">
                <h1>THITIWAT THONGBOR.</h1>
              </div>
            </div>)
  }
}

export default index
