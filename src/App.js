import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Brand from './components/brand/brand';

function App() {
  return (
    <div className="App">
<Navbar/>
<Content/>
<Brand/>
<About/>
<Footer/>
    </div>
  );
}

export default App;
