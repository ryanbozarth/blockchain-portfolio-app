import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import profile from '../server';
import * as actions from '../actions';
import { enforceNumber, getColor } from '../utils/index';

import './Summary.css';

// Earnings
function calculateEarned(current, initial) {
  let result = current - initial;
  return result;
}

let amount = calculateEarned(profile.currentValue, profile.amountInvested);

// ROI
function returnOnInvestment(currentValue, amountInvested) {
  let result = {};

  enforceNumber(currentValue, amountInvested);

  if (!currentValue || !amountInvested) {
    throw new Error(
      'Earnings and initial investment are required and must be numbers.'
    );
  }

  result.raw = (currentValue - amountInvested) / amountInvested;
  result.rounded = Math.round(result.raw * 10000) / 10000;
  result.percent = result.rounded * 100;
  return result.percent;
}

let roiResult = returnOnInvestment(
  profile.currentValue,
  profile.amountInvested
);

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <div className="summary-card">
          <h5>Current Value</h5>
          <p className="primary-heading">
            ${_.get(this.props, 'auth.bitcoin', 0).toLocaleString()}
          </p>
        </div>
        <div className="summary-card border-left">
          <h5>Day's Gain</h5>
          <p className="primary-heading green-text">$XXX.XX</p>
        </div>
        <div className="summary-card border-left">
          <h5>Amount Invested</h5>
          <p className="primary-heading">
            ${_.get(this.props, 'auth.investment', 0).toLocaleString()}
          </p>
        </div>
        <div className="summary-card border-left">
          <h5>Amount Earned</h5>
          <p className={getColor() + ' primary-heading'}>
            {_.get(this.props, 'user.amountEarned', 0).toLocaleString()}
          </p>
        </div>
        <div className="summary-card border-left">
          <h5>Earnings % (ROI)</h5>
          <p className={getColor() + ' primary-heading'}>
            {_.get(this.props, 'user.roi', 0).toLocaleString()}%
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Summary);
