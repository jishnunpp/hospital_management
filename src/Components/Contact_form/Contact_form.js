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
            <div className='form-section'>
            <input placeholder='choose Department' type='text' className='input-data'/>
            <input placeholder='choose Doctor'type='text' className='input-data'/>
            <input placeholder='Enter your name' type='text' className='input-data' />
            <input placeholder='Enter email address' type='email' className='input-data'/>
            <div className='form-small-section'>
            <input placeholder='phone' type='number' className='input-sdata'/>
            <input placeholder='date' type='date' className='input-sdata'/>
            <input placeholder='choose Department' type='time' className='input-sdata'/>

            </div>
            </div>
            <div className='form-btn'> <button>Book an Appoinment</button></div>
            

          </div>
        </div>
      
    </div>
  )
}

export default Contact_form
