const express = require('express');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
const path = require('path');
const apiRoutes = require('./routes/api_routes');
const htmlRoutes = require('/routes/html_routes');
/* const util = require('util') */
const PORT = process.env.PORT || 3001;

 
//staring up server
const app = express();

//static 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/api', api_routes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost' + PORT)
});


// then =>

    // API Route ( "Get" reques )
    // @ ("./develop/db/db.json")

    // API Route ( "Post" request )
    // @ ("./develop/db/db.json")

    // API Route ( "Delete" request ) | OPTIONAL
