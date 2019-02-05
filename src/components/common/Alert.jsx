import React from 'react'

const Alert = ({ alert }) => {
  let className = 'alert alert-';
  switch (alert.status) {
    case 400:
      className += 'warning';
      break;
    
    case 404:
      className += 'danger';
      break;
    
    case 200:
      className += 'success';
      break;

    default:
      className += 'info';
      break;
  }

  return <div className={className}>{alert.message}</div>;
  
}
 
export default Alert;