const router = require('express').Router();
const path = require('path');

router.use('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
 
router.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;