import React, { Component } from 'react';

class Portfolio extends Component {

  render(){
    return(
      <article className='info-container'>
        <img className='image-border'
           src='/assets/images/large/portfolio.png'
           alt='San Francisco Museum of Modern Art'/>
        <section className='box-blurb' id='portfolio'>
          <p>More to come!</p>
        </section>
      </article>
    );
  }
}
export default Portfolio;
