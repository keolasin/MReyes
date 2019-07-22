import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Portfolio extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className='card-container'>
        <Card>
          <Card.Img
            variant="top"
            width={150}
            height={150}
            alt={this.props.alt}
            src={this.props.image}
            href={this.props.link} target="_blank"
          />
          <Card.Text class="description">
            <strong>{this.props.name}</strong> {this.props.description}
          </Card.Text>
          <Card.Subtitle>
            <h6><strong>Tools: </strong>{this.props.tools}</h6>
          </Card.Subtitle>
        </Card>
      </section>
    );
  }
}
export default Portfolio;
