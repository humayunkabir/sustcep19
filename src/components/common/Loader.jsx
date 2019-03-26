import React from 'react';

const Loader = props => {
  return (
    <div
      className="d-flex justify-content-center align-items-center w-100"
      style={Object.assign({ minHeight: '100vh' }, props.style)}
    >
      <div
        className="spinner-border"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
