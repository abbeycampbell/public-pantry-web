import React from 'react';
import PropTypes from 'prop-types';

export class Status extends React.Component {

  static defaultProps = {
    checked: false
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
  }

  state = {
    checked: this.props.checked
  };

   handleChange = () => {
      this.setState({checked: !this.state.checked})
   }

  render () {

    return (
      <span>
        <input type="checkbox"
               defaultChecked={this.state.checked} 
               onChange={this.handleChange}  
               name={this.props.name} /> {this.props.label}
      </span>
    );
  }
}
  
export default Status;