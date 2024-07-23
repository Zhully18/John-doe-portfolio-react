import React from 'react'
import './Services.css'
import { services } from '../data'

const Service = () => {
  return (
    <div>
        <section class="services" id='services'>
            <h2 className='service_header'>My Services</h2>
            <p className='text'>Our team of expert is dedicated to turning your vision into reality with innovative and reliable technology.</p>
            <div class="service_container">
            {services.map(({icon, head, desc}) =>{
                    return (
                        <div className="service_list">
                            <div className="service_icon">
                                <h2 className='icon'>{icon}</h2>
                            </div>
                            <h2>{head}</h2>
                            <p>{desc}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    </div>
  )
}

export default Service