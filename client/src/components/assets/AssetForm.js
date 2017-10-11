import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import FormField from './FormField';
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
  const re = /^(:?^|\s)(?=.)((?:0|(?:[1-9](?:\d*|\d{0,2}(?:,\d{3})*)))?(?:\.\d*[1-9])?)(?!\S)$/;
  const errors = {};

  _.each(formFieldNames, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    } else if (!re.test(values[name])) {
      errors[name] = 'Please enter a number';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'assetForm',
  destroyOnUnmount: false
})(AssetForm);
