import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Course from './Components/Course/Coursemain'
import Footer from './Components/Footer/Footer'
// import HTML from './assets/HTML.png';
import Courselist from './Components/Course/Courselist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* sending value through props */}
     <Courselist/>   
      <Footer/>
    </>
  );
};

export default App
