import React from 'react';
import LabeledInput from './LabledInput';
import Button from './Button';

class Entrybox extends React.Component {
    //const {type, status, notes, posted}
    state = {
        type: '',
        status: null,
        notes: ''
    }

    setType = (value) => {
        this.setState({ type: value })
      }

    setStatus = (value) => {
        this.setState({ status: value })
      }  

    setNotes = (value) => {
        this.setState({ notes: value })
      }

    // write function for submit button that will send data to back end


      render() {
        return (
            <div className="box">
                <LabeledInput 
                    label="What's growing?" 
                    value={this.state.type} 
                    updateValue={this.setType}
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


{/* <form>
                    <label for="type">What's growing?</label>
                    <input type="text" name="type"></input>

                    <label for="status">Is it ready now?</label>
                    <input type="radio" name="status" value="yes">Yes</input>
                    <input type="radio" name="status" value="no">No</input>
                    
                    <label for="notes">Notes: (optional)</label>
                    <input type="text" name="notes"></input>

                    <input type="submit" value="Submit The Form"></input>

                </form> */}