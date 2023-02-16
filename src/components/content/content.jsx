import React from 'react'
import './content.css'
function Content() {
  return (
    <div className='content'>
<div className="__header section__padding" id="home">
    <div className="__header-content">
      <h1 className="gradient__text">Authenication Supercharged.</h1>
      <p className='tagline'>Verify your luxury products using the power of
       <br/>
   <span className='uspa'> <span className='usp'> NFC </span> and <span className='usp'>  NFT</span> </span> </p>

      <div className="__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="__header-image">
      <img src='./cat.png'/>
    </div>
  </div>
    </div>
  )
}

export default Content