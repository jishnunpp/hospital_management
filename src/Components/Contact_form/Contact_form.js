import React from 'react'
import './contact_form.css'

const Contact_form = () => {
  return (
    <div className='contactform'>
        <div className='contactform-heading'>
            <h2>Your Health, Your schedule,<br/> Our solution</h2>

        </div>
        <div className='contactform-form'>
            <p>Make an appoinment</p>
          <h1>Meet With Our Experts</h1>
          <div className='form'>
            <input placeholder='choose Department' className='input'/>
            <input placeholder='choose Doctor'/>

          </div>
        </div>
      
    </div>
  )
}

export default Contact_form
