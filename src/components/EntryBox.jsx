import React from 'react';
import LabeledInput from './LabledInput';
import Button from './Button';
import Status from './Status';
import axios from 'axios';

class Entrybox extends React.Component {
    //const {type, status, notes, posted}
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            status: false,
            notes: '',
        }
    }
    

    setType = (value) => {
        this.setState({ type: value })
      }

    setStatus = () => {
        this.setState({ status: !this.state.status })
      }  

    setNotes = (value) => {
        this.setState({ notes: value })
      }

    // write function for submit button that will send data to back end
    sendData = async () => { 
        // send json object with type, status, lat, lng, and notes
        // grab lat and lng from newLocation in state (id and timestamp are auto generated)
        const body = { type: this.state.type,
            status: this.state.status,
            lat: this.props.newLocation.lat,
            lng: this.props.newLocation.lng,
            notes: this.state.notes
          }
          console.log(body);
        const response = await axios.post(
            'http://localhost:3000/entries',
            body,
            { headers: { 'Content-Type': 'application/json' } }
          )
          console.log('sendData', response)
          this.props.updateEntries(response.data)
    }

      render() {
        return (
            <div className="box">
                <LabeledInput 
                    label="What's growing?" 
                    value={this.state.type} 
                    updateValue={this.setType}
                />

                <Status 
                    label="Is it ready now?"
                    checked={this.state.status}
                    name="status"
                    onChange={this.setStatus}
                />

                <LabeledInput 
                    label="Notes: (optional)" 
                    value={this.state.notes} 
                    updateValue={this.setNotes}
                />
                <Button
                    title="Submit"
                    onClick={this.sendData}
                />
            </div>
        )
      }
    }

export default Entrybox;