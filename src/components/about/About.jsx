import React from 'react'
import "./about.css"
import about from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'
import CVForm from '../../CVPDF/lin_yaung_oo_cv.pdf'
const About = () => {
  return (
    
      <section className="about container section" id='about' >
        <h2 className="section__title">
          About Me
        </h2>
        <div className="about__container grid">
          <img src={about} alt="" className='about__img' />
          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href={CVForm} className='btn'>Download CV</a>
            </div>
            <div className="about__skills grid">

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaSE</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage javaSE"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Html</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutBox/>
      </section>
  )
}

export default About
