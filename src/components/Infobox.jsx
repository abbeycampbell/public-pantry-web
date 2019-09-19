import React from 'react';

class InfoBox extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <ul>
                    <li>
                        Click on a marker to see what's growing
                    </li>
                    <li>
                        Click anywhere to tell us what's growing
                    </li>
                </ul>
            </div>
        )
    }
}

export default InfoBox;