const router = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json');
// Helper for generating unique id
const uuid = require('uuid');


// "GET" resquest
router.get('/notes', (req, res) => {
    const savedNOtes = db;
    res.json(savedNOtes)
})


// "POST" request
router.post('/notes', (req, res) => {
    const notes = db;
    const addNotes = req.body;
    console.log(req.body)
    addNotes.id = uuid.v4()
    // uuid helper
    notes.push(addNotes);
    console.log(notes)
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const deleteNote = notes.filter((removeNote) => removeNote.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(deleteNote));

    res.json(deleteNote);
});

module.exports = router;

