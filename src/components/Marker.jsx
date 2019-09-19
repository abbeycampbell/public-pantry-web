import React from 'react';

function Marker(props) {
    return (
        <button
            type="button"
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}

export default Marker;