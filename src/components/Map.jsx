import React from 'react';
import { async } from 'q';
import Axios from 'axios';
import Pin from './Marker';
import InfoBox from './Infobox';


class Map extends React.Component {
    state = {
        entries: []
    };

// fetch entries; save to state
async componentDidMount() {
    let response = await Axios.get('http://localhost:3000/entries');
    let arrayOfEntryObj = response.rows;
    this.setState({entries: arrayOfEntryObj});
}

render() {
    return (
        <div id="map">
            {this.state.entries.map((entry, index) => <Marker lat={entry.lat} lng={entry.lng} key={index}/>)}
            <InfoBox />
        </div>
    )
}

}

export default Map;

