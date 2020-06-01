const mongoose = require('mongoose')
const Schema =  mongoose.Schema;

//Create the Schema 
const ItemSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    articlebody: {
        type: String,
        required: true,
    },
})

module.exports = Item = mongoose.model('item', ItemSchema);