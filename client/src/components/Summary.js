import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import { getColor } from '../utils/index';

import './Summary.css';

// Earnings
// function calculateEarned(current, initial) {
//   let result = current - initial;
//   return result;
// }

// ROI
// function returnOnInvestment(currentValue, amountInvested) {
//   let result = {};
//
//   enforceNumber(currentValue, amountInvested);
//
//   if (!currentValue || !amountInvested) {
//     throw new Error(
//       'Earnings and initial investment are required and must be numbers.'
//     );
//   }
//
//   result.raw = (currentValue - amountInvested) / amountInvested;
//   result.rounded = Math.round(result.raw * 10000) / 10000;
//   result.percent = result.rounded * 100;
//   return result.percent;
// }

class Summary extends Component {
  componentDidMount() {
    // this.props.currentValue();
  }
  currentValue() {
    if (_.isEmpty(this.props.auth)) {
      return '0';
    }
    const bitcoin =
      this.props.auth.bitcoin * this.props.prices.priceList.bitcoin.price_usd;
    const ethereum =
      this.props.auth.ethereum * this.props.prices.priceList.ethereum.price_usd;
    const litecoin =
      this.props.auth.litecoin * this.props.prices.priceList.litecoin.price_usd;
    return bitcoin + ethereum + litecoin;
  }

  render() {
    return (
      <div className="summary">
        <div className="summary-card">
          <h5>Current Value</h5>
          <p className="primary-heading">$0</p>
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

function mapStateToProps({ auth, prices }) {
  return { auth, prices };
}

export default connect(mapStateToProps, actions)(Summary);
