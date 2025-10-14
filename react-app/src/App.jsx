import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './NavBar'
import Course from './Course/Coursemain'
import Footer from './Footer/Foter'
// import HTML from './assets/HTML.png';
import Courselist from './Course/Courselist'


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
