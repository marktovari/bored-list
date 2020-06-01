const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

//Getting API routes
const items = require('./routes/api/items');
const app = express();

//Bodyparser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connect Database
const db = require('./config/keys').mongoURI
mongoose
    .connect(db)
    .then(() => console.log("Database conneted!"))
    .catch(err => console.log(err))

//Use Routes set up in ./routes/api/items
app.use('/api/items', items);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set the folder with Node.js
    app.use(express.static('client/build/'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) 
    })
}