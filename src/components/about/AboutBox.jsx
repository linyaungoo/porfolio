import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className='about title'>10</h3>
                <span className='about__subtitle'>Project completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className='about title '>10000</h3>
                <span className='about__subtitle'>Cup of Coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className='about title'>0</h3>
                <span className='about__subtitle'>Satified Client</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox