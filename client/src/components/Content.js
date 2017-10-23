import React, { Component } from 'react';
import PortfolioAssets from './PortfolioAssets';
import AssetPriceList from './AssetPriceList';

import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="content content-portfolio">
        <PortfolioAssets />
        <AssetPriceList />
      </div>
    );
  }
}

export default Content;
