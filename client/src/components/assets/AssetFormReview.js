import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFieldNames from './formFieldNames';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const FormReview = ({ onCancel, formValues, submitForm, history }) => {
  const reviewFields = _.map(formFieldNames, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="form-group">
      <h5>Please review your entries</h5>
      {reviewFields}
      <button onClick={onCancel}>Back</button>
      <button onClick={() => submitForm(formValues, history)}>Submit</button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.assetForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(FormReview));
