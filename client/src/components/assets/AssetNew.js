import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
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
          auth_id={this.props.auth_id}
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

// export default reduxForm({
//   form: 'assetForm'
// })(AssetNew);

function mapStateToProps(state) {
  return {
    auth_id: state.auth._id
  };
}

export default connect(mapStateToProps)(
  reduxForm({
    form: 'assetForm'
  })(AssetNew)
);
