import React from 'react'
import './Contact.css'
import FACEBOOK from '../../images/icon/facebook.png'
import TWITTER from '../../images/icon/twitter.png'
import INSTAGRAM from '../../images/icon/instagram.png'
import time from '../../updated'

class Contact extends React.Component {
  render() {
    return (<div className='Contact'>
              <h5>Want to hire me? </h5>
              <h5>Email me at <a href="mailto:thitiwat.tho1@ku.th?Subject=I%20found%20you%20on%20github%20page">thitiwat.tho1@ku.th</a></h5>
              <div>
                <a href="https://www.facebook.com/thitiwat.thongbor"><img className="social" alt="facebook" src={FACEBOOK} /></a>
                <a href="https://twitter.com/GuyZivesO"><img className="social" alt="twitter" src={TWITTER} /></a>
                <a href="https://www.instagram.com/guy_zives"><img className="social" alt="instagram" src={INSTAGRAM} /></a>
              </div>
              <h6>or Call +668-377-0808</h6>
              <h5>You'll find a new technology world!</h5>
              <div>
                last update : {time.date}
              </div>
            </div>)
  }
}

export default Contact
