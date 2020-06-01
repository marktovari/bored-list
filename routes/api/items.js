/*This entire thing could go into server.js, but to keep it clean,
 it gets its own folder and file
 NOTE: the file and folder name are not to be confused with the API route we are setting here.
 The name is just for recognizability*/
const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item-model');

//@route    GET api/items
//@desc     Get every item
//@access   Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ name: -1})
        .then(items => res.json(items))
});

//@route    POST api/items
//@desc     Create an artile for the database
//@access   Public
router.post('/', (req, res) => {
    const newItem = new Item({
        title: req.body.title,
        articlebody: req.body.articlebody
    });

    newItem.save().then(item => res.json(item));
});

/*Doesn't work yet*/
//@route    DELETE api/items:id
//@desc     Remove an Article from the db
//@access   Public
// router.delete('/:id', (req, res) => {
//         Item.findById(req.params.id)
//         .then(item => item.remove().then(() => res.json({success: true})))
//         .catch(err => res.status(404).json({success:false}))
//     });

    
//@route    POST api/items
//@desc     Create an "I was here" for the messge
//@access   Public
// router.post('/', (req, res) => {
//     const newItem = new Item({
//         title: req.body.title,
//         articlebody: req.body.articlebody
//     });

//     newItem.save().then(item => res.json(item));
// });

module.exports = router;