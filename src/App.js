import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './components/Landing.js';
import Experience from './components/Experience.js';
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
              <Link to='/'><img id='home-sprite' src='https://mreyes.s3-us-west-1.amazonaws.com/assets/images/bike_small.png' alt='Matthew on his bike portrait'/></Link>
              <Link className='link-item' to='/about'>About</Link>
              <Link className='link-item' to='/experience'>Experience</Link>
              <Link className='link-item' to='/portfolio'>Portfolio</Link>
              <Link className='link-item' to='/contact'>Contact</Link>
            </nav>
          </header>
          <main>
            <Route exact path ="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
