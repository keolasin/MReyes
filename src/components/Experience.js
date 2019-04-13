import React, { Component } from 'react';

class Experience extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <article className='info-container'>
        <img className='image-border'
           src='/assets/images/large/education.png'
           alt='Education photo, building in Palma de Mallorca'/>
        <section className='box-blurb'>
          <ul id='experience'>
            <li className='type-head'>Education</li>
            <li className='title'>University of Arizona</li>
            <li className='dates'>2011-2015</li>
            <li className='description'>Bachelors of Science in Molecular Biology, Neuroscience and Cognitive Science</li>
            <li className='title'>Bloc</li>
            <li className='dates'>2018-2019</li>
            <li className='description'>Web developer track through Bloc bootcamp</li>
            <li className='type-head'>Experience</li>
            <li className='title'>Pulmonary Function Technican, UCSF</li>
            <li className='dates'>2017 - Present</li>
            <li className='description'>Something about what I do as a PFT technician</li>
            <li className='title'>Some other job</li>
            <li className='dates'>2017 - Present</li>
            <li className='description'>Something about what I do as a PFT technician</li>
            <li className='type-head'>Education</li>
            <li className='title'>University of Arizona</li>
            <li className='dates'>2011-2015</li>
            <li className='description'>Bachelors of Science in Molecular Biology, Neuroscience and Cognitive Science</li>
            <li className='title'>Bloc</li>
            <li className='dates'>2018-2019</li>
            <li className='description'>Web developer track through Bloc bootcamp</li>
            <li className='type-head'>Experience</li>
            <li className='title'>Pulmonary Function Technican, UCSF</li>
            <li className='dates'>2017 - Present</li>
            <li className='description'>Something about what I do as a PFT technician</li>
            <li className='title'>Some other job</li>
            <li className='dates'>2017 - Present</li>
            <li className='description'>Something about what I do as a PFT technician</li>
          </ul>
        </section>
      </article>
    );
  }
}
export default Experience;
