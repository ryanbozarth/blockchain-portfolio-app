import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input className="form-input" {...input} />
      <div className="red-text error">{touched && error}</div>
    </div>
  );
};
