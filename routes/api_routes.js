const router = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json');
// Helper for generating unique id
const uuid = require('uuid');


// "GET" request - Retrieves all notes
router.get('/notes', (req, res) => {
    const savedNotes = db;
    res.json(savedNotes);
});


// "POST" request - Adds a new note
router.post('/notes', (req, res) => {
    const notes = db;
    const addNotes = req.body;
    console.log(req.body);

    // Generate a unique id for the new note using uuid helper
    addNotes.id = uuid.v4();

    notes.push(addNotes);
    console.log(notes);

    // Write updated notes array to the JSON file
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));

    res.json(notes);
    console.log("Note created successfully");
});

// "DELETE" request - Deletes a note by its id
router.delete('/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));

    // Filter out the note with the specified id
    const deleteNote = notes.filter((removeNote) => removeNote.id === req.params.id);

    // Write updated notes array to the JSON file
    fs.writeFileSync('./db/db.json', JSON.stringify(deleteNote));

    res.json(deleteNote);
    console.log("Note deleted successfully");
});

module.exports = router;
