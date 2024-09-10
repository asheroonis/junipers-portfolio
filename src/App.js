import styles from './App.module.css';

import NavBar from './components/navbar.jsx';
import FooterElement from './components/footer-element.jsx';

import Home from './pages/Home.js';
import Works from './pages/Works.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className={styles.app}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Works" element={<Works/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
      <FooterElement/>
    </div>
  );
}

export default App;
