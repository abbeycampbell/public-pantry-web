import React from 'react'

class LabeledInput extends React.Component {
  state = {}

 
  render() {

    return (
      <div>
        <p>{this.props.label}</p>
        <input  
          value={this.props.value}
          onChange={(event) => this.props.updateValue(event.target.value)}
        />
      </div>
    )
  }
}

export default LabeledInput