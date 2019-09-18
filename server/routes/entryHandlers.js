//ROUTE HANDLERS FOR ENTRIES IN DB
const express = require('express');
const fileController = require('../controllers/fileController');
const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE

router.get('/entries', fileController.getAllEntries, (req, res) => {
        res.status(200).json(res.locals);
    });


router.get('/entry', fileController.getEntry,
    (req, res) => {
        (res.status(200).json({
            // send back a specific entry
        }))
    })


router.post('/')

    module.exports = router;