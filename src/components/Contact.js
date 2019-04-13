import React, { Component } from 'react';

class Contact extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <article className='info-container'>
        <img className='image-border'
           src='/assets/images/large/coffee.png'
           alt='Cup of coffee and succulent adjacent'/>
        <section className='box-blurb'>
          <img id='bike' src='/assets/images/large/bike_portrait.png'/>
          <p>Want to chat?</p>
            <a id='email' href="mailto:Matthew@mreyes.info?Subject=Hi%20Matt">Matthew@mreyes.info</a>
          <p>San Francisco, CA</p>
        </section>
      </article>
    );
  }
}
export default Contact;
