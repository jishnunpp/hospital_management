import React from 'react'
import './Experence.css'
import ex from '../../Assets/cdc-bzj1U0udLnM-unsplash.jpg'

const Experience = () => {
  return (
    <div className='experinece section-padding'>
        <div className='experinece-section-heading'>
            <p>
              why Choose Us
            </p>

        </div>
        <div className='experinece-section'>
            <div className='experinece-text'>
                <div className='experinece-heading'>
                    <h2>In Sickness And In Health, We're Here For You</h2>
                    <p>we take a Holstic approch to care, emphasizing preventive measures early ditection,and personalized treatment plans </p>

                </div>
                <div className='experinece-points'>
                    <div className='experinece-points-data'>
                        <div>

                        </div>
                        <div>
                            <div>

                            </div>
                            <div>

                            </div>

                        </div>
                    </div>

                </div>
                

            </div>
            <div experinece-image>
                <img src={ex} alt='ex'/>

            </div>

        </div>
      
    </div>
  )
}

export default Experience
