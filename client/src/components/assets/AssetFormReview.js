import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFieldNames from './formFieldNames';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const FormReview = ({ onCancel, formValues, submitForm, history, auth_id }) => {
  const reviewFields = _.map(formFieldNames, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div className="italics">{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="form-area">
      <h2>Please review your entries</h2>
      {reviewFields}
      <div className="btn-group">
        <button className="form-btn form-btn-cancel" onClick={onCancel}>
          Back
        </button>
        <button
          className="form-btn form-btn-review"
          onClick={() => submitForm(formValues, history, auth_id)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.assetForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(FormReview));
