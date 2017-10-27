import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import { round } from '../utils';

class PortfolioAssets extends Component {
  render() {
    return (
      <div className="card">
        <h3>Portfolio Assets</h3>
        <div className="chart" />
        <div className="card-row">
          <p>Bitcoin</p>
          <p className="primary-heading">
            {_.get(this.props, 'auth.bitcoin', 0)}
          </p>
        </div>
        <div className="card-row">
          <p>Ethereum</p>
          <p className="primary-heading">
            {_.get(this.props, 'auth.ethereum', 0)}
          </p>
        </div>
        <div className="card-row">
          <p>Litecoin</p>
          <p className="primary-heading ">
            {_.get(this.props, 'auth.litecoin', 0)}
          </p>
        </div>
        <div className="card-row" />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(PortfolioAssets);
