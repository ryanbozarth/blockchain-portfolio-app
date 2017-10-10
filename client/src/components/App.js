import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import 'normalize.css';
import '../Reset.css';
import './App.css';

import Header from './Header';
import Landing from './Landing';
import Home from './Home';
import AssetNew from './assets/AssetNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header className="grid" />
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Home} />
            <Route path="/add" component={AssetNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
