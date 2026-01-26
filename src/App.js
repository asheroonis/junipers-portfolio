import styles from './App.module.css';

import NavBar from './components/navbar.jsx';
import FooterElement from './components/footer-element.jsx';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Works from './pages/Works.js';
import Contact from './pages/Contact.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className={styles.app}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Works" element={<Works/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
      <FooterElement/>
    </div>
  );
}

export default App;
