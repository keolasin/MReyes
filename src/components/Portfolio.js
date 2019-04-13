import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <article className='info-container'>
        <img className='image-border'
           src='/assets/images/large/portfolio.png'
           alt='San Francisco Museum of Modern Art Picture'/>
        <section className='box-blurb' id='portfolio'>
          <p>More to come!</p>
        </section>
      </article>
    );
  }
}
export default Portfolio;
