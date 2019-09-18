import React from 'react';
import { async } from 'q';
import Axios from 'axios';
import GoogleMapReact from 'google-map-react';


class Map extends React.Component {
    state = {
        entries = []
    };

// fetch entries; save to state
async componentDidMount() {
    let response = await Axios.get('http://localhost:3000/entries')
    let arrayOfEntryObj = response.rows;
    this.setState({entries: arrayOfEntryObj})
    console.log(this.state)
}

render() {
    return (
        <div id="map">
            <InfoBox />
        </div>
    )
}

}

