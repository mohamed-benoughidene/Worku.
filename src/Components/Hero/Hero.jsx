import React from 'react';
 import 'animate.css';
import herImg from '../../images/Hero_Image-trimmy-removebg-preview 1.svg';
export default function Hero() {
  return (
    <div id='Hero'>
        <div className="container">
<div className="content-hero">
    <h1 className='heading-hero'>Manage and track all your Work Inside one app</h1>
    <p className='paragraph-hero'>Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et. Pellentesque in ipsum id orci porta dapibus</p>
    <a href="" className='btn'>Learn More </a>
</div>
<img src={herImg} alt="girl holding a laptop" className='hero-img animate__bounceIn'/>
        </div>

    </div>
  )
}
