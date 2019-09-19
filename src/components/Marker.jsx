import React from 'react';

function Marker({index, title, onClick}) {
    //console.log(props.index);
    return (
        <button
            type="button"
            onClick={() => onClick(index)}
            style={{ backgroundColor: 'red' }}
        >
            {title}
        </button>
    )
}

export default Marker;