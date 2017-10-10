import React, { Component } from 'react';
import Summary from './Summary';
import Content from './Content';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="grid">
        <Summary />
        <Content />
      </div>
    );
  }
}

export default Home;
