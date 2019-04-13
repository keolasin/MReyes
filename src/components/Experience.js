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
            <li className='dates'>2011 - 2015</li>
            <li className='description'>Bachelors of Science in Molecular Biology, Neuroscience and Cognitive Science, National Hispanic Merit Scholar</li>

            <li className='title'>Bloc</li>
            <li className='dates'>2018 - Present</li>
            <li className='description'>Enrolled in the web developer track, I've learned front-end skills such as HTML/CSS/Javascript, React, and certain frameworks (React Bootstrap and Material Design). Currently, I am learning data structures and algorithms, and look forward to projects involving SQL and node.js on the back-end.</li>

            <li className='title'>UC Berkeley Extension</li>
            <li className='dates'>2018</li>
            <li className='description'>In a mid-level biostatistics course, I learned the basics of </li>

            <li className='title'>City College of San Francisco, Spanish language</li>
            <li className='dates'>2017-2018</li>
            <li className='description'>In seeking to engage better with patients as well as friends and family, I've been learning spanish through language courses at City College of San Francisco, where I've completed intermediate level courses culminating in an immersive trip to Barcelona, Spain in 2018 and a planned trip to Costa Rica in the fall of 2019. I hope to continue taking courses through CCSF and continue practicing my spanish in the coming years.</li>

            <li className='type-head'>Experiences</li>

            <li className='title'>Pulmonary Function Technican, UCSF</li>
            <li className='dates'>2016 - Present</li>
            <li className='description'>As a senior technician, I work daily with patients to obtain test results concerning their lung function. In this position, I have trained junior technicians, I manage the inventory and supply orders for the lab, and contribute to updating protocols through weekly meetings with attending physicians and coworkers.</li>

            <li className='title'>Emergency Room Scribe, Dominican Hospital</li>
            <li className='dates'>2015 - 2016</li>
            <li className='description'>During my time with Dominican, I became acquainted with hospital electronic health record systems and patient-physician interaction and care through an emergency room setting.</li>

            <li className='title'>iD Tech</li>
            <li className='dates'>2015</li>
            <li className='description'>As a camp counselor with iD tech, I taught and engaged with children ages 7-17 through weeklong introductory coding and photography courses, with a focus on Java and basic HTML/CSS.</li>

            <li className='title'>Laboratory Teaching Aid</li>
            <li className='dates'>2015</li>
            <li className='description'>As a laboratory aid to a 400-level molecular biology course, I helped and graded students in a nine-hour per week lab to better their understanding of genetics and the underlying biochemistry. We performed many complex lab protocols, including polymerase-chain reaction and plasmid/vector creation, which culminated in a research project concerning various knockout strains of yeast and downstream effects via flow cytometry.</li>

          </ul>
        </section>
      </article>
    );
  }
}
export default Experience;
