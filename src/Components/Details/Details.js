import React from 'react';
import './details.css'

const Details = () => {
  return (
    <div className='details section-padding'>
        <div className='details-text'>
            <h2>"Delivering <br/> Healtt With Heart"</h2>

        </div>
        <div className='details-datas'>
            <div className='details-data'>
                <div>
                    <h5>100k+</h5>
                </div>
                <div>
                    <p>Recoverd patients</p>
                </div>

            </div>
            <div className='details-data'>
            <div>
                    <h5>95%</h5>
                </div>
                <div>
                    <p>Satisfacation rate</p>
                </div>



            </div>
            <div className='details-data'>
            <div>
                    <h5>55+</h5>
                </div>
                <div>
                    <p>Expert Doctors</p>
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default Details
