
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Members from'./components/Members/Members.jsx';
import Topbar from './components/Topbar/Topbar.jsx';
import Background from './resources/background.jsx';
import './App.scss'

import { useState } from 'react';




function App() {

  const [ menuOpen, setMenuOpen] =useState(false)
  return (
    <div className="App">

      <Topbar menuOpen= {menuOpen} setMenuOpen={setMenuOpen} />


      <div className="sections">

        <About/>
        <Members/>
        <Contact/>
        <Footer/>

      </div>
      
    </div>
  );
}

export default App;
