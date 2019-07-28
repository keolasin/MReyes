import React, { Component } from 'react';

class Contact extends Component {

  render(){
    return(
      <article className='info-container'>
        <img className='image-border'
           src='https://mreyes.s3-us-west-1.amazonaws.com/assets/images/coffee.png'
           alt='Cup of coffee and succulent adjacent'/>
        <section className='box-blurb'>
          <img id='bike' src='https://mreyes.s3-us-west-1.amazonaws.com/assets/images/bike_portrait.png' alt='Matthew on his bike portrait'/>
          <p>Want to chat?</p>
          <a className='email' href="mailto:Matthew@mreyes.info?Subject=Hi%20Matt">Matthew@mreyes.info</a>
          <p>San Francisco, CA</p>
        </section>
      </article>
    );
  }
}
export default Contact;
