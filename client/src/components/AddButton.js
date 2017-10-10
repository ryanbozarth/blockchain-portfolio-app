import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AddButton extends Component {
  render() {
    return <Link to="/add">Add Assets</Link>;
  }
}

export default connect(null, actions)(AddButton);
