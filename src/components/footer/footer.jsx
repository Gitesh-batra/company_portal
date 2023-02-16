import React from 'react'
import './footer.css'
import { AiOutlineInstagram, AiOutlineMail  } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";


function Footer() {
  return (
    <div className='footer' id='footer'>
      
      <h1 className='foot'>
        step into the future of authentication with us  
      </h1>
      <h3>
        Contact Us 
      </h3>
      <div className='social'>
      <AiOutlineInstagram className='s'/>
      <AiOutlineMail className='s'/>
      <BsTelephone className='s'/>
      </div>

    </div>
  )
}

export default Footer