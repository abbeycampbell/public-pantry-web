import React from 'react';

function Infobox({data}) {
    console.log(data);
    const {type, status, notes, posted} = data;
        return (
            <div className="box">
                <p>{type}</p>
                <p>{status ? 'Ready now' : 'Not ready'}</p>
                <p>Notes: {notes}</p>
                <p>{posted}</p>
            </div>
        )
    }

export default Infobox;

// render timestamp with moment