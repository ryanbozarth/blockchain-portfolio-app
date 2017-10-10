import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AddAssets extends Component {
  render() {
    return <a>Add Assets</a>;
  }
}

export default connect(null, actions)(AddAssets);
