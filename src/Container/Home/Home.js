import React from 'react'
import Banner from '../../Components/Banner/Banner';
import Details from '../../Components/Details/Details';
import Dpmt_card from '../../Components/Dpmt_card/Dpmt_card';
import Testimonial from '../../Components/Testimonial/Testimonial';
 import Experience from '../../Components/Experience/Experience';
import Contact_form from '../../Components/Contact_form/Contact_form';
import About from '../../Components/About/About';

const Home = () => {
  return (
    <div>
        <Banner/>
      
      <Details/>
      <Dpmt_card/>
      <About/>
      <Experience/>
      <Testimonial/>
      <Contact_form/>
      
    </div>
  )
}

export default Home
