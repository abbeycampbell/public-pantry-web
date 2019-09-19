import React from 'react';

function Marker(props) {
    return (
        <button
            type="button"
            onClick={props.onClick}
            style={{ background: 'red' }}
        >
            {props.title}
        </button>
    )
}

export default Marker;