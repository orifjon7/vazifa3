import React from 'react'
import NavbarComponent from './navbar'
import FooterCom from './footer'
import "./home.css"
import frame from "../assests/Frame.svg"
import buildmax from "../assests/Buildmax-Interior-Design 1.svg"
import design from "../assests/design-home.svg"
import sketch1 from "../assests/_001-sketch_1_.svg"
import sketch2 from "../assests/Group 88.svg"
import sketch3 from "../assests/_002-blueprint_1_.svg"
import lawyer from "../assests/Lawyers-Hub-1 1.svg"
import Arusha from "../assests/EAC-Arusha 1.svg"
import Plaza from "../assests/Transnational-Bank-Plaza-Paint-work-Buildmax 2.svg"
import galery from "../assests/Screenshot 2020-06-07 at 23.50 1@2x.svg"
const HomeComponent = () => {
  return (
    <div>
      <NavbarComponent />
      <div className='home-wrapper'>
      <div className='home-main'>
<h1>The condtruction kings building up great things</h1>
<p>Buildmax Limited is a professional building,<br /> renovation and refurbishment company. We are part <br /> of the Nairobi-based Talisman Capital Group. <br /><br />Frame</p>
     
     <h5>Read More</h5>
     <img src={frame} alt="frame" />
     </div>
      <div className='home-main-bg'>
        <h1>Our Projects</h1>
      </div></div>
      <div className='home-text'>
       <div className='home-text-left'><h1>Since we Started <br /> work in 1900</h1>
        <h5>---Quality design at the fairest price</h5></div> 
       <div className='home-text-right'> <p>We have worked on some of the stunning architectural marvels within <br />industries like hotels, residential buildings, offices, commercial buildings,<br /> food & beverage and made them great successes.</p>
      <p>We have worked on some of the stunning architectural marvels within <br />industries like hotels, residential buildings, offices, commercial buildings,<br /> food & beverage and made them great successes.</p>
      <h5>lorem ipsum</h5></div>
      </div>
      <div className='home-design'>
<div className='home-design-left'>
  <img src={buildmax} alt="buildmax" />
  <h1>Great work <br />Ethic.</h1>
  <p>We have worked on some of the stunning architectural marvels <br />within industries like hotels, residential buildings, offices,<br /> commercial buildings, food & beverage and made them great <br />successes.
   </p>
   <button>Learn More</button>
</div>
<div className='home-design-right'>
  <h1>Aesthetically <br />pleasing.</h1>
  <p>We have worked on some of the stunning architectural marvels <br />within industries like hotels, residential buildings, offices,<br /> commercial buildings, food & beverage and made them great <br />successes.
   </p>
   <button>Learn More</button>
   <img src={design} alt="design" />
</div>
      </div>
   
     <div className='sketch-text' ><h1>We Provide Below Services.</h1></div>
      <div className='sketch-wr'>
      <div >
        <img src={sketch1} alt="sketch1" />
        <h1>Retail-Fit Out &<br />
        Carpentry</h1>
        <p>Lorem ipsum dolor sit <br />
        amet consect etur.</p>
      </div>
      <div>
        <img src={sketch2} alt="sketch2" />
        <h1>Construction</h1>
        <p>Lorem ipsum dolor sit <br />
        amet consect etur.</p>
      </div>
      <div >
        <img src={sketch3} alt="sketch3" />
        <h1>interior & space <br />
        planing</h1>
        <p>Lorem ipsum dolor sit <br />
        amet consect etur.</p>
      </div>
    </div>
    <div className='project-text'>
      <h1>Our Latest Projects</h1></div>
     <div className='project-wr'>
      <img src={lawyer} alt="lawyer" />
      <img src={Arusha} alt="Arusha" />
      <img src={Plaza} alt="Plaza" />
    </div>
    <div className='galery-wr'>
<div className='galery-text'><h1>Our Gallery <h5>Quality design at the fairest price</h5></h1>
<p>Lorem ipsum dolor sit amet consect <br />etur adipiscing elit  sed do eiusmo. <br />There are many variations.</p></div>
   <div className='galery-photo'><img src={galery} alt="galery" /></div>
    </div>
      <FooterCom />
    </div>
  )
}

export default HomeComponent