
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Dpmt_card from './Components/Dpmt_card/Dpmt_card';
import Details from './Components/Details/Details';
import Experience from './Components/Experience/Experience';
import Contact_form from './Components/Contact_form/Contact_form';
import Testimonial from './Components/Testimonial/Testimonial';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      
      <Details/>
      <Dpmt_card/>
      <About/>
      <Experience/>
      <Testimonial/>
      <Contact_form/>
      


      <Footer/>
      

    </div>
  );
}

export default App;
