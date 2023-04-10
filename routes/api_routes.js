const router = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json');
const uuid = require('uuid');
// Helper for generating id


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

router.delete('/notes:id', (req, res) => {
    const notes = JSON.parse(fs.readFile('./db/db.jdon'));
    const deleteNote = note.filter((removeNote) => removeNote.readFile !== req.params.id);
    fs.writeFile('./db/db.json', JSON.stringify(deleteNote));

    res.json(deleteNote);
});

module.exports = router