import React from 'react'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_name">
          <h2>John Doe</h2>
        </div>
        <div className="footer_links">
          <BsInstagram className='footer_icon'/>
          <FaFacebook  className='footer_icon'/>
          <BsTwitterX  className='footer_icon'/>
          <LiaLinkedin className='footer_icon'/>
        </div>
      </div>
      <hr />
      <p className='copy'>Copyright john-doe 2024. All Rights Reserved</p>
    </div>
  )
}

export default Footer