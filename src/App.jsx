import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import GoogleMapReact from 'google-map-react';
import Marker from './components/Marker';
import Axios from 'axios';

class App extends React.Component {
    constructor(props, state) {
        super(props, state);
    }

    state = {
        entries: []
    }

    static defaultProps = {
        center: {lat: 33.987882, lng: -118.470715},
        zoom: 15
    }

    async componentDidMount() {
        console.log('component mounted')
        let response = await Axios.get('http://localhost:3000/entries');
        console.log('got data', response)
        let arrayOfEntryObj = response.data.rows;
        console.log('got fruits!', arrayOfEntryObj)
        this.setState({entries: arrayOfEntryObj});
    }

    render() {
        return (
            <div id="main-container" style={{ height: '100vh', width: '100%' }}>
                <Header />
                <GoogleMapReact 
                  bootstrapURLKeys={{ key: 'AIzaSyBTm-pDTSJN-wN13RALT45lCOMrueYdszY' }}
                  defaultCenter={this.props.center}
                  center={this.state.center}
                  defaultZoom={this.props.zoom}
                  onChildMouseEnter={this.onChildMouseEnter}
                  onChildMouseLeave={this.onChildMouseLeave}
                  >
                      {this.state.entries.map((entry, index) => 
                      <Marker 
                      lat={entry.lat} 
                      lng={entry.lng} 
                      key={index}
                      />)}
                      
                  </GoogleMapReact>
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