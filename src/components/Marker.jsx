import React from 'react';
import Fig from './Fig'

function Marker({index, title, currentIndex, onClick}) {
    //console.log(props.index);
    return (
        <button
            type="button"
            onClick={() => onClick(index)}
            style={{ backgroundColor: 'transparent', borderWidth: 0}}
        >
            <Fig size={20} color={currentIndex === index ? 'green' : "#8f687a"}/>
        </button>
    )
}

export default Marker;