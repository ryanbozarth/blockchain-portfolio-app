import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import AssetForm from './AssetForm';
import AssetFormReview from './AssetFormReview';

import './AssetNew.css';

class AssetNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <AssetFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <AssetForm onFormSubmit={() => this.setState({ showFormReview: true })} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'assetForm'
})(AssetNew);
