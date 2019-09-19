import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import GoogleMapReact from 'google-map-react';
import Marker from './components/Marker';
import Axios from 'axios';
import Infobox from './components/InfoBox'
import Instructions from './components/Instructions';
import Location from './components/Location'
import Entrybox from './components/EntryBox'
import { stat } from 'fs';

class App extends React.Component {
    constructor(props, state) {
        super(props, state);
        this._onClick = this._onClick.bind(this);
    }

    state = {
        entries: [],
        currentIndex: null,
        newLocation: null,
        coords: {
            lat: 33.987882,
            lng:-118.470715
        }
    }

    _onClick = ({x, y, lat, lng, event}) => {
        console.log('x:', x, 'y:', y, lat, lng, 'event:', event)
        // _onClick should generate entryBox in place of instructions
        this.setState({newLocation: {lat: lat, lng: lng}, currentIndex: null}, console.log(this.state.newLocation))
    }

    static defaultProps = {
        center: {lat: 33.987882, lng: -118.470715},
        zoom: 15
    }

    async componentDidMount() {
        
        let response = await Axios.get('http://localhost:3000/entries');
        console.log('got data', response)
        let arrayOfEntryObj = response.data.rows;
        console.log('got fruits!', arrayOfEntryObj)
        this.setState({entries: arrayOfEntryObj});
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                //console.log(position)
                this.setState({entries: arrayOfEntryObj, coords: {lat: position.coords.latitude, lng: position.coords.longitude}})});
          } else {
            console.log("no")
          }
    }

    // function that will return specific data for marker
    getEntryData = (currentIndex) => {
        // displays type, status, notes, timestamp
        this.setState({currentIndex: currentIndex});
    }

    render() {
        // logic to switch between boxes
        // let content = null,
        // if(this.state.newLocation !== null) {
            
        // }
        return (
            <div id="main-container" style={{ height: '100vh', width: '100%' }}>
                <Header />
                <GoogleMapReact 
                  onClick={this._onClick}
                  bootstrapURLKeys={{ key: 'AIzaSyBTm-pDTSJN-wN13RALT45lCOMrueYdszY' }}
                  defaultCenter={this.props.center}
                  center={this.state.coords}
                  defaultZoom={this.props.zoom}
                  >
                      {this.state.entries.map((entry, index) => 
                      <Marker 
                      lat={entry.lat} 
                      lng={entry.lng} 
                      key={index}
                      index={index}
                      currentIndex={this.state.currentIndex}
                      onClick={this.getEntryData}
                      title={entry.type}
                      />)}
                      <Location lat={this.state.coords.lat} lng={this.state.coords.lng}/>
                      
                  </GoogleMapReact>
                  {this.state.currentIndex !== null
                    ? <Infobox data={this.state.entries[this.state.currentIndex]} /> : this.state.newLocation !== null
                    ? <Entrybox newLocation={this.state.newLocation}/> : <Instructions /> }
            </div>

        )
    }
}

export default App;

// render instructions and infor
// {this.state.currentIndex !== null ? <Infobox data={this.state.entries[this.state.currentIndex]} /> : <Instructions /> }

// render instructions, info, and entry form
// {this.state.currentIndex !== null ? <Infobox data={this.state.entries[this.state.currentIndex]} /> : this.state.newLocation !== null ? <Entrybox /> : <Instructions /> }




//                     <Marker
//                     lat={33.988100}
//                     lng={-118.469794}
//                     text="My Marker"
//                     />