import React, { Component } from 'react';

class About extends Component {

  render(){
    return(
      <article className='info-container'>
        <img className='image-border'
           src='https://mreyes.s3-us-west-1.amazonaws.com/assets/images/about.png'
           alt='Matthew LinkedIn portrait'/>
        <section className='box-blurb'>
          <p>I'm a web developer in <strong>San Francisco</strong> with a background in healthcare and biological sciences. I believe in lifelong learning and seeking out new experiences to challenge myself.</p>
        </section>
      </article>
    );
  }
}
export default About;
