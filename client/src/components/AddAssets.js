import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AddAssets extends Component {
  render() {
    return <button>Add Assets</button>;
  }
}

export default connect(null, actions)(AddAssets);
