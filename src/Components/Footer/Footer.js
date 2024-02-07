import React from 'react';
import './footer.css'
import logo from '../../Assets/esight-logo.jpg';
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const footer = () => {
  return (
    <div className='footer'>
    <div className='footer-content section-padding'>
      <div className='footer-section'>
        <div className='footer-logo'>
         <div className='footer-logo-image'>
            <img src={logo} alt='logo'/>

            </div>
            <div  className='footer-logo-text'>
            <h2>ESIGHT <br/>HOSPITAL</h2>

            </div>

        </div>
        <div className='footer-text'>
          <p>From wellness tips to expert advice, we're here to support your journey to a healthier you</p>

        </div>
        <div className='footer-icons'>
          <ul>
            <li><BsFacebook/></li>
            <li>< FaTwitterSquare/></li>
            <li><FaInstagramSquare /></li>
            <li><FaLinkedin /></li>
            
          </ul>

        </div>

      </div>
      <div className='footer-section'>
        <h4>Quik Links</h4>
        <ul>
          <li>Home</li>
          <li>Appoinment</li>
          <li>Licenses</li>
          <li>Changelog</li>
        </ul>

      </div>
      
      <div className='footer-section'>
        <h4>Opening Hours</h4>
        <ul>
          <li>Mon to Tue 08:00 AM to 05:00 PM</li>
          <li>Wed to Thu 09:00 AM to 09:00 PM</li>
          <li>Fri to Sat 08:00 AM to 05:00 PM</li>
          <li>Sunday     Emergency Only</li>
          <li>Personal   Mon 05:00 PM</li>
        </ul>

      </div>
      <div className='footer-section'>
        <h4>Contacts</h4>
        <ul>
          <li>Thrissur kerala</li>
          <li>9090909090</li>
          
        </ul>

      </div>
      
    </div>
    <div className='footer-copyright'>
      <p>designed and developed by Jishnu np</p>
    </div>

    </div>
  )
}

export default footer
