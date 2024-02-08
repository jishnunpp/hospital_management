
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
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Container/Body/Body';
import Home from './Container/Home/Home';
import Contacts from './Container/Contacts/Contacts'
import Benefit from './Container/Benefit/Benefit';
import Features from './Container/Features/Features';
import Demo from './Container/Demo/Demo';


function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'contacts',
          element:<Contacts/>
        },
        {
          path:'benefit',
          element:<Benefit/>
        },
        {
          path:'features',
          element:<Features/>
        },
        {
          path:'demo',
          element:<Demo/>
        },
       
      ],
    },
    
  
    
    
  ]);
  
  return (
    <div className="App">
     
      <RouterProvider router={appRouter} />
      

    </div>
  );
}

export default App;
