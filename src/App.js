import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './components/Landing.js';
import Education from './components/Education.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <Link className='link-item' id='home-sprite' to='/'><img src='/assets/images/small/bike_small.png'/></Link>
              <Link className='link-item' to='/about'>About</Link>
              <Link className='link-item' to='/experience'>Experience</Link>
              <Link className='link-item' to='/portfolio'>Portfolio</Link>
              <Link className='link-item' to='/contact'>Contact</Link>
            </nav>
          </header>
          <main>
            <Route exact path ="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/education" component={Education} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
