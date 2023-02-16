import React from 'react'
import './about.css'

function About() {
  return (
    <div className="about section__padding" id="about">
    <div className="about-image">
    <img src='./4.png'/>
    </div>
    <div className="about-content">

      <h1 className="gradient__text" id='idea'>The Idea</h1>
      <p className='desc'>
        <span>Embedd NFC within luxurious items.</span>
        <br/>
        <span>Each NFC will have a unique public ID which connects to the NFT on the blockchain.</span>
        <br/>
        <span>User will be able to verify the authenticity of the item by scanning the NFC with their phone.</span>
        <br/>
      </p>
    </div>
  </div>
  )
}

export default About