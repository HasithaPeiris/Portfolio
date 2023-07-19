import React from 'react'
import "./info.css"
import Me from "../../img/me.png"

function Info() {
  return (
    <div className='i'>
        <div className="i-bg"></div> 
        <div className="i-wrapper">
        <div className='i-left'>
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, my name is</h2>
                <h1 className="i-name">Hasitha Peiris</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UX/UI Designer</div>
                        <div className="i-title-item">Brand Designer</div>
                        <div className="i-title-item">Photographer</div>
                        <div className="i-title-item">Writer</div>
                    </div>
                </div>
                <div>
                    <p className="i-desc">
                        Hello! I'm a professional graphic designer having rich experience in Logo Design. My main goal is to make my customers delighted with creative designs. Let's join the world of creativity!
                    </p>
                </div>
                <svg
                    viewBox="0 0 24 24"
                    fill="#F89923"
                    height="1em"
                    width="1em"
                    className="i-scroll"
                    >
                    <path d="M11.29 9.71a1 1 0 001.42 0l5-5a1 1 0 10-1.42-1.42L12 7.59l-4.29-4.3a1 1 0 00-1.42 1.42zm1.42 4.58a1 1 0 00-1.42 0l-5 5a1 1 0 001.42 1.42l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z" />
                </svg>
            </div>
        </div>
        <div className='i-right'>
            <img src={Me} alt="" className="i-img" />
        </div>
        </div>
          
    </div>
  )
}

export default Info