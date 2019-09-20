import React from 'react';
import PropTypes from 'prop-types';

function Status({label, checked, name, onChange}) {
    return (
      <span>
        <input type="checkbox"
               defaultChecked={checked} 
               onChange={onChange} 
               name={name} /> {label}
      </span>
    );
}
  
export default Status;