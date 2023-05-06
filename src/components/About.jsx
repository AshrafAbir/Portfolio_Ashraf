import React from 'react'
import './about.css'
import Award from '../img/Award.jpeg'
import Image from '../img/img1.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
            <img src={Image}
            alt="" 
            className="about-img" 
            />
        </div>
      </div>

      <div className="about-right">
        <h1 className="about-title">About me</h1>
        <h5 className="about-subtitle">
            If you are in need of someone who can do tasks and be a better developer
        </h5>
        <p className="about-description">
            Hello, visitor. I am Computer Science engineer who completed the BSC degree from a reputed university of Bangladesh.
            My <span style = {{color : '#5FBAB1'}}> experties and enthusiasm</span> is in Web developing more specifically in
            <span style = {{color : '#5FBAB1'}}> Frontend designing and
            developing </span>. My ambition is to give users a better experince in online world by providing easy and uniquely
            designed web sites with the help of recent and advanced technology.
        </p>
        <div className="about-award">
            <img src={Award} alt="" className="about-award-img" />
            <div className="about-award-texts">
                <h4 className="about-award-title">Extra caricular apprecition</h4>
                <p className="about-award-description">
                    During my study time the only club i had joined and worked was ACM student chapter of NSU. There i get an appreciation
                    award for being a obedient member of events like Technovation. 
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
