import React from 'react'
import './Hero.css'
import man from '../../assets/man2.png'
import { FaStarOfLife } from 'react-icons/fa6'
import { GiBeveledStar, GiFallingStar, GiFlatStar } from 'react-icons/gi'
import { MdStar, MdStarHalf } from 'react-icons/md'

const Hero = () => {
  return (
    <div>
      <div className="hero">
       <div className="hero_content">
          <h1>I'm John Doe, </h1>
          <h2>A Fullstack developer </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Hit Me Up</button>
          <div className="icons">
          <FaStarOfLife  className='one'/>
          <GiBeveledStar className='two'/>
          <GiFallingStar className='three'/>
          <GiFlatStar className='four'/>
          <MdStar className='five'/>
          <MdStarHalf className='six'/>
        </div>
       </div>
       <div className="hero_img">
        <img src={man} alt="" />
       </div>
      </div>
    </div>
  )
}

export default Hero