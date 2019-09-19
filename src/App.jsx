import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import GoogleMapReact from 'google-map-react';
import Marker from './components/Marker';
import Axios from 'axios';
import Infobox from './components/InfoBox'
import Instructions from './components/Instructions';
import Location from './components/Location'

class App extends React.Component {
    constructor(props, state) {
        super(props, state);
    }

    state = {
        entries: [],
        currentIndex: null,
        coords: {
            lat: 33.987882,
            lng:-118.470715
        }
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
                console.log(position)
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
        return (
            <div id="main-container" style={{ height: '100vh', width: '100%' }}>
                <Header />
                <GoogleMapReact 
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
                      onClick={this.getEntryData}
                      title={entry.type}
                      />)}
                      <Location lat={this.state.coords.lat} lng={this.state.coords.lng}/>
                      
                  </GoogleMapReact>
                  {this.state.currentIndex !== null ? <Infobox data={this.state.entries[this.state.currentIndex]} /> : <Instructions /> }
            </div>

        )
    }
}

export default App;



//                     <Marker
//                     lat={33.988100}
//                     lng={-118.469794}
//                     text="My Marker"
//                     />