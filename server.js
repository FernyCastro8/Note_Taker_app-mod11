const express = require('express');
// Helper method for generating unique ids
// const uuid = require('./helpers/uuid');
const path = require('path');
const apiRoutes = require('./routes/api_routes');
const htmlRoutes = require('./routes/html_routes');
const PORT = process.env.PORT || 3001;

 
//staring up server
const app = express();

//static 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
// app.post('/api/notes', (req, res) => {
//     console.log(req.body);
// })
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost' + PORT)
});
