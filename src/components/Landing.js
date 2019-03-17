import React, { Component } from 'react';

class Landing extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className='landing-bin'>
        <article className='triple education'>
          <img href='./../../imgs/dog_vert.jpg' />
          <section className='hover-container'>
            <a id='education'>Click me</a>
          </section>
        </article>

        <article className='triple about'>
          <img href='./../../imgs/bike_vert.jpg' />
          <section className='hover-container'>
            <a id='about'></a>
          </section>
        </article>

        <article className='triple portfolio'>
          <img href='./../../imgs/run_vert.jpg' />
          <section className='hover-container'>
            <a id='portfolio'></a>
          </section>
        </article>
      </section>
    );
  }
}
export default Landing;
