import React, { useContext, useRef, useState } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

function Contact() {

  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_48dltbf', 'template_xs5kh59', formRef.current, 'RYhCkS_3EzfjuC1JJ')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
    });
  }

  return (
    <div className='c'>
      <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
              <h1 className="c-title">Contact Me</h1>
              <div className="c-info">
                <div className="c-info-item">
                  <img src={Phone} alt="" className="c-icon" />
                  +94 71 458 6272
                </div>
                <div className="c-info-item">
                  <img src={Email} alt="" className="c-icon" />
                  hasithapeiris.me@gmail.com
                </div>
                <div className="c-info-item">
                  <img src={Address} alt="" className="c-icon" />
                  42/B Peelipothagama Road, Badulla
                </div>
              </div>
            </div>
            <div className="c-right">
              <p className="c-desc">
                <b>What's your story?</b> Get in touch. Always avilable for freelancing if the right project comes along me.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name'/>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject'/>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email'/>
                <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name='message'/>
                <button>Submit</button>
                {done && "Thank you!"}
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact