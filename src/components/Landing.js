import React, { Component } from 'react';

class Landing extends Component {
  constructor(props){
    super(props);

    this.state={
      isHovered: false
    }
  }

  handleHover(){

  }

  render(){
    return(
      <section className='landing-bin'>
        <article className='triple education'>
          <img src='./assets/images/dog_vert.jpg'
               alt='Ocean Beach with dog'/>
          <section className='hover-container'>
            <a id='education'></a>
          </section>
        </article>

        <article className='triple about'>
          <img src='./assets/images/bike_vert.jpg'
               alt='Matthew on bike smiling'/>
          <section className='hover-container'>
            <a id='about'></a>
          </section>
        </article>

        <article className='triple portfolio'>
          <img src='./assets/images/run_vert.jpg'
               alt='Green mountainside with running trail'/>
          <section className='hover-container'>
            <a id='portfolio'></a>
          </section>
        </article>
      </section>
    );
  }
}
export default Landing;
