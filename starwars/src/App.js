import React, { Component } from 'react';
import './App.css';
import Char from './components/Char';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
 constructor() {
  super();
  this.state = {
   starwarsChars: [],
   next: '',
   previous: '',
   flag: false,
  };
 }

 componentDidMount() {
  this.getCharacters('https://swapi.co/api/people/');
 }

 getCharacters = URL => {
  // feel free to research what this code is doing.
  // At a high level we are calling an API to fetch some starwars data from the open web.
  // We then take that data and resolve it our state.
  fetch(URL)
   .then(res => {
    return res.json();
   })
   .then(data => {
    console.log(data);
    this.setState({
     starwarsChars: data.results,
     next: data.next,
     previous: data.previous,
    });
   })
   .catch(err => {
    throw new Error(err);
   });
 };

 handleNext = () => {
  if (this.state.next) {
   //   console.log(this.state.next);
   this.getCharacters(this.state.next);
  }
  //   else {
  //    this.setState({ flag: true });
  //   }
 };
 handlePrevious = () => {
  if (this.state.previous) {
   //   console.log(this.state.next);
   this.getCharacters(this.state.previous);
  }
  //   else {
  //    this.setState({ flag: true });
  //   }
 };

 render() {
  //   console.log(this.state.starwarsChars);
  return (
   <div className="wrapper">
    <div className="App">
     <h1 className="Header">React Wars</h1>
     <div className="cardWrapper">
      {this.state.starwarsChars.map(char => {
       return <Char charProps={char} />;
      })}
     </div>
     {/* <a href={this.state.Previous}> */}
     <button
      onClick={this.handlePrevious}
      //   className={`${this.state.flag ? 'noth' : null}`}
     >
      Previous
     </button>
     {/* </a>
     <a href={this.state.Next}> */}
     <button
      onClick={this.handleNext}
      //   className={`${this.state.flag ? 'noth' : null}`}
     >
      Next
     </button>
     {/* </a> */}
    </div>
   </div>
  );
 }
}

export default App;
