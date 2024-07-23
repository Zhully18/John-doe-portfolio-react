import React from 'react'
import man from '../../assets/man2.png'
import './About.css'
import { FaHtml5, FaNode, FaPython, FaReact } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'

const About = () => {
  return (
    <div>
      <div className="about" id='about'>
        <div className="about_left">
          <img src={man} alt="" />
        </div>
        <div className="about_right">
          <h2>About Me</h2>
          <h3>I'm John Doe, A Fullstack developer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, odit. Et corrupti fugiat harum rerum! Sint beatae reprehenderit deleniti expedita neque suscipit perferendis facilis reiciendis error. Amet aperiam eos ea.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio hic dolorem esse accusamus atque, impedit, cum quibusdam commodi repellendus dicta earum veritatis voluptate? Illo incidunt nostrum recusandae rem. Cumque, dolores!</p>
          <button>Hit Me Up</button>
        </div>
      </div>
    </div>
  )
}

export default About