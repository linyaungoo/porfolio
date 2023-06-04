import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <section className="contct container section">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everythigs!</h3>
          <p className="contact__details">Send me an email!!</p>
        </div>
        <form action='' className='contact__form'>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input"placeholder='Insert your name'/>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
