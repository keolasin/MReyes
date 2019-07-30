import React, { Component } from 'react';

class PortfolioCard extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className="card-container">
        <img
          variant="top"
          width={150}
          height={150}
          alt={this.props.alt}
          src={this.props.image}
          href={this.props.link}
          target="_blank"
        />
        <p className="card-description">
          <strong>{this.props.name}</strong> {this.props.description}
        </p>
        <button href={this.props.link} className="code-button" type='button' target='_blank'>Code</button>
      </section>
    );
  }
}
export default PortfolioCard;
