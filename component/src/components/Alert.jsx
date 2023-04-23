import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const Alert = (props) => {
  return (
    <div className="alert alert-warning" role="alert">
      {props.text}
    </div>
  );
};

export default Alert;
