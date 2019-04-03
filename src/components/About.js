import React, { Component } from 'react';

class About extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <article>
        <section className='box-blurb'>
        </section>
        <img id='about'
             src='/assets/images/large/about.png'
             alt='Matthew linkedIn photo'/>
      </article>
    );
  }
}
export default About;
