import './App.css';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import About from './components/about/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import {useState} from 'react';

function App() {

  const [active, setActive] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home setActive={setActive}/>}/>
        <Route path='about' element= {<About />}/>
        <Route path='portfolio' element= {<Portfolio />}/>
        <Route path='contact' element= {<Contact />}/>
      </Routes>
      <Navbar active={active} setActive = {setActive}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
