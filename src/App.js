
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Dpmt_card from './Components/Dpmt_card/Dpmt_card';
import Details from './Components/Details/Details';
import Experience from './Components/Experience/Experience';
function App() {
  return (
    <div className="App">
      <Header/>
      <Details/>
      <Dpmt_card/>
      <Experience/>
      
      <Banner/>

      <Footer/>
      
    </div>
  );
}

export default App;
