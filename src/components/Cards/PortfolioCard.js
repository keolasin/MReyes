import React, { Component } from 'react';
import { Card } from 'react-bootstrap';




class PortfolioCard extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Card className="card-container">
        <Card.Img
          variant="top"
          width={150}
          height={150}
          alt={this.props.alt}
          src={this.props.image}
          href={this.props.link}
          target="_blank"
        />
        <Card.Body>
          <Card.Text className="card-description">
            <strong>{this.props.name}</strong> {this.props.description}
          </Card.Text>
          <Card.Subtitle>
            <Card.Link href={this.props.link} className="link-item-card">Code</Card.Link>
          </Card.Subtitle>

        </Card.Body>

      </Card>
    );
  }
}
export default PortfolioCard;
