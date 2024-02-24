const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');
const multer = require('multer');
const path = require('path'); // Import the path module

// Corrected diskStorage initialization
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images'); 
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + file.originalname); 
    }
});

const upload = multer({ storage: storage });


//GET /items: send all items to the user
router.get('/', controller.index);


//GET /items/search
router.get('/search', controller.search);

//GET /items/new: send html for creating a new planet 
router.get('/new', controller.new);

//POST /items: create a new planet 
router.post('/', controller.create);

//GET /items/:id: send details of planet identified by ID
router.get('/:id', controller.show);

//GET /items/:id/edit: send html form for editing an existing planet
router.get('/:id/edit', controller.edit);

//PUT /items/:id: update the story identified by ID
router.put('/:id', controller.update);

//DELETE /items/:id: delete the story identified by the ID
router.delete('/:id', controller.delete);





module.exports = router;