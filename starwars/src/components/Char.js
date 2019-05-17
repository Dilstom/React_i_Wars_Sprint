import React from 'react';
import {
 Card,
 CardText,
 CardBody,
 CardTitle,
 CardSubtitle,
 Button,
} from 'reactstrap';
import './StarWars.css';

const Char = props => {
 console.log('props in char: ', props);
 return (
  <div className="cardContainer">
   <CardTitle>{props.charProps.name}</CardTitle>
   <CardSubtitle>{props.charProps.gender}</CardSubtitle>
   <CardText>{props.charProps.birth_year}</CardText>
   <Button>Button</Button>
  </div>
 );
};

export default Char;
