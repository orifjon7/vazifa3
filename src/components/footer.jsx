import React from 'react'
import "./footer.css"
import facebook from "../assests/Path 13 1.svg"
import twitter from "../assests/001 twitter black shape 1.svg"
import instagram from "../assests/010 instagram 1.svg"
import video from "../assests/videocam_24px.svg"


const FooterCom = () => {
  return (
    <div className='footer'>
<div className='footer-text'>
  <div className='about-wr'><h1>About the company</h1>
  <p>Buildmax Limited is a professional building,<br /> 
  renovation and refurbishment <br />company. We are part of the <br /> 
  Nairobi-based Talisman Capital Group.</p></div>
  <div className='newspaper'>
    <h1>Newsletter</h1>
<p>Stay updated with our lates offers</p>
<input type="text" placeholder='your.address@email.com' /> <br />

<button>Subscribe</button>
  </div>
  <div className='follow-wr'>
  <h1>Follow us</h1>
  <img src={facebook} alt="facebook" /> <p>Buildmax-Ltd</p>
  <img src={twitter} alt="twitter" /> <p>buildmax_ke</p>
  <img src={instagram} alt="instagram" /> <p>buildmax_ltd</p>
  <img src={video} alt="video" /> <p>Buildmax Limited</p>
  </div>
</div>
<div className='last-text'>
  <h5>© BuildMax Limited | All Rights Reserved. | 2019</h5>
</div>
<div className='last-texts'>
  <p>Home</p>
  <p>About </p>
  <p>Contact</p>
  <p>Services</p>
</div>
    </div>
  )
}

export default FooterCom