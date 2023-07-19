import React from 'react'
import "./about.css"
import Award from "../../img/award.png"

function About() {
  return (
    <div className='a'>
        <div className="a-wrapper">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/4974907/pexels-photo-4974907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">Hello! I'm a professional graphic designer.</p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Design Award</h4>
                    <p className="a-award-desc">My main goal is to make my customers delighted with creative designs. Let's join the world of creativity!</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About