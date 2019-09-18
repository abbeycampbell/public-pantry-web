// DEFINE ENTRY METHODS HERE
const fs = require('fs');
const path = require('path');

const fileController = {};

// GET: users should be able to get all entries when their map first loads
fileController.getAllEntries = (req, res, next) => {
    fetch('client')
    .then(res => res.json())
    .then(res.locals[allEntries] = res.json.results)
    console.log(res.locals.allEntries)
}


// GET: users should be able to get a specific entry onclick
fileController.getEntry = (req, res, next) => {

}


// POST: users should be able to create a new entry
fileController.createEntry = (req, res, next) => {

}


// stretch:
// PUT: users should be able to edit entries that they authored


// DELETE: users should be able to delete entries that they authored

module.exports = fileController;