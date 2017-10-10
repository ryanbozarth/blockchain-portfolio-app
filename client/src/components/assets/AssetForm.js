import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import FormField from './FormField';
import validateNumbers from '../../utils';
import formFieldNames from './formFieldNames';

class AssetForm extends Component {
  renderFields() {
    return _.map(formFieldNames, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={FormField}
          type="number"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="form-area">
        <h2 className="form-header">How much of each asset do you own?</h2>
        <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
          {this.renderFields()}
          <div className="btn-group">
            <button className="form-btn form-btn-cancel">
              <Link to="/dashboard">Cancel</Link>
            </button>
            <button className="form-btn form-btn-review" type="submit">
              Review
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // errors.values = validateNumbers(values || '');

  return errors;
}

export default reduxForm({
  validate,
  form: 'assetForm',
  destroyOnUnmount: false
})(AssetForm);
