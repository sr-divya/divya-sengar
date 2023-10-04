import './App.css';
import Header from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Error from './pages/Error';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='*' Component={Error}/>
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
