//ROUTE HANDLERS FOR ENTRIES IN DB
const express = require('express');
const fileController = require('../controllers/fileController');
const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE

router.get('/', fileController.getAllEntries, 
    (req, res) => {
        (res.status(200).json({
            // data here
        }))
    });