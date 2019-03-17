import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing.js';
import Education from './components/Education.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path ="/" component={Landing} />
          <Route path="/education" component={Education} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </main>
      </div>
    );
  }
}

export default App;
