import React, { Component } from 'react';
import PortfolioCard from './Cards/PortfolioCard';


class Portfolio extends Component {

  render(){
    return(
      <article className='info-container'>
        <img className='image-border'
           src='/assets/images/large/portfolio.png'
           alt='San Francisco Museum of Modern Art'/>
        <section className='box-blurb' id='portfolio'>
          <h1 className='type-head'>Front-end</h1>
            <PortfolioCard
              name="Jams"
              image="/assets/images/large/education.png"
              link="https://github.com/keolasin/bloc-jams-react"
              description="A spotify-clone for users to listen to songs from a library"
              tools="React"
              alt=""
            />

            <PortfolioCard
              name="Chatter"
              image="/assets/images/large/education.png"
              link="https://github.com/keolasin/bloc-chat-react"
              description="An instant-messenger site for users to create chat rooms and send messages"
              tools="React"
              alt=""
            />

          <h1 className='type-head'>Back-end</h1>
            <PortfolioCard
              name="Voter"
              image="/assets/images/large/education.png"
              link="https://github.com/keolasin/bloccit"
              description="A reddit-clone site for users to create topics, posts, and comments and more"
              tools="Node, Express, EJS"
              alt=""
            />

            <PortfolioCard
              name="Wikiclone"
              image="/assets/images/large/education.png"
              link="https://github.com/keolasin/blocipedia-node"
              description="A wiki-clone for users to create public and private wikis and collaborate between them"
              tools="Node, Express, EJS"
              alt=""
            />

          <h1 className='type-head'>Data structures and Algorithms</h1>
            <PortfolioCard
              name="Fundamentals"
              image="/assets/images/large/education.png"
              link="https://repl.it/@keolasin"
              description="A series of repl.it code snippets to demonstrate common computer science algorithms and data structures"
              tools="repl.it"
              alt=""
            />
        </section>
      </article>
    );
  }
}
export default Portfolio;
