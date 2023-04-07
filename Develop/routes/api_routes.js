const router = require('express').router();
const fs = require('fs');
/* const uuid = ('uudi');
    Helper for generating id */


    // "GET" resquest
router.get('notes', (req, res) => {
    const data = fs.readFile('./db/db.json');
    res.json(JSON.parse(data));
})

    // "POST" request
router.post('notes:id', (req, res) => {
    const notes = JSON.parse(fs.readFile ('./db/db.json'));
    const addNotes = req.body;
    /* addNotes.id = uuid.v4()
        // uuid helper  */
        notes.push(addNote);
        fs.writeFile('.dv/db.json', JSON.stringify(notes));
        res.json(notes);
})

router.delete('/notes:id', (req, res) => {
    const notes = JSON.parse(fs.readFile('./db/db.jdon'));
    const deleteNote = note.filter((removeNote) => removeNote.readFile !== req.params.id);
    fs.writeFile('./db/db.json', JSON.stringify(deleteNote));

    res.json(deleteNote);
});

module.exports = router