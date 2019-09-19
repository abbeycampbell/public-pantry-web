import React from 'react';
import Header from './components/Header';
import Googlemap from './components/Map';
import GoogleMapReact from 'google-map-react';

class App extends React.Component {
    constructor(props, state) {
        super(props, state);
    }

    state = {}

    render() {
        return (
            <div id="main-container">
                <Header />
                <Map />
            </div>

        )
    }
}

export default App;
