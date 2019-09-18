import React from 'react';
import Header from './Header';
import Map from './Map';

class App extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <Header />
                <Map />
            </div>

        )
    }
}

export default App;