import React from 'react'
import "./about.css"
import about from '../../assets/avatar-2.svg'
const About = () => {
  return (
    <div>
      <section className="about container section" id='#about'>
        <h2 className="section__title">
          About Me
        </h2>
        <div className="about__container grid">
          <img src={about} alt="" className='about__img' />
          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href='' className='btn'>Download CV</a>
            </div>
            <div className="about__skills grid">

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name"></h3>
                  <span className="skills__number"></span>
                </div>
                <div className="skill__bar">
                  <span className="skills__percentage"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name"></h3>
                  <span className="skills__number"></span>
                </div>
                <div className="skill__bar">
                  <span className="skills__percentage"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name"></h3>
                  <span className="skills__number"></span>
                </div>
                <div className="skill__bar">
                  <span className="skills__percentage"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
