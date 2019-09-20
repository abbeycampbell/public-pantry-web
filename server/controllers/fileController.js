// DEFINE ENTRY METHODS HERE
const fs = require('fs');
const path = require('path');
const pool = require('../../db/index');


const fileController = {};

// GET: users should be able to get all entries when their map first loads
fileController.getAllEntries = (req, res, next) => {
    const allEntries = 'SELECT * FROM entries';
    pool.query(allEntries, (err, data) => {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
}

// GET: users should be able to get a specific entry onclick
// fileController.getEntry = (req, res, next) => {
//     console.log(req, req.params.id)
//     res.json(req.params)
// }


// POST: users should be able to create a new entry
fileController.createEntry = (req, res, next) => {
    const newEntry = `INSERT INTO entries(type, status, lat, lng, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *`
    console.log(req.body)
    const values = [req.body.type, req.body.status, req.body.lat, req.body.lng, req.body.notes];
    pool.query(newEntry, values, (err, data) => {
        console.log('returning all?', data)
        if(err) {
            res.json(err);
        } else {
            res.json(data.rows)
        }
    })
}
// when new entry is created, send back all entries so that the page can rerender with the new entry

// stretch:
// PUT: users should be able to edit entries that they authored


// DELETE: users should be able to delete entries that they authored

module.exports = fileController;