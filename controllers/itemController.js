const model = require('../models/item');


exports.index = (req,res) => {
    //res.send('Send all Planets');
    let item = model.find();

    item.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    
    res.render('./item/index',{item})



};

exports.new = (req,res) =>{
    res.render('./item/new');
};


exports.create = async (req, res) => {
    let itemData = req.body;
    //console.log(req.body);
    console.log(req.file);
    console.log(req.body);
    

    const imageURL = '/images/' + req.file.filename;


    if (req.file) { 
        itemData.image = imageURL; 
        model.save(itemData); 
        res.redirect('/items');
    } else {
        console.error(error);
        res.status(500).send('Error saving the item');
    }

};

exports.show = async (req, res, next) => {
    let id = req.params.id;
    let item = await model.findById(id);
    
    
    if (item) {
        
        res.render('./item/show', { item });
    } else {
        let err = new Error('Cannot find a Planet with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.edit = (req,res,next) => {
    let id = req.params.id;
    let item = model.findById(id);
    //res.send('Send edit form for planet ' + req.params.id);
    if (item) {
        res.render('./item/edit', { item });
    } else {
        let err = new Error('Cannot find a Planet with id ' + id);
        err.status = 404;
        next(err);
    }
    console.log("WE MADE IT");
};

exports.update = async (req, res, next) => {
    let id = req.params.id;
    let updatedData = req.body;
    const imageURL = '/images/' + req.file.filename;

    if (req.file) {
        
        updatedData.image = imageURL; 
        console.log(req.file);
        console.log(req.file.path)
    }

    let success =  model.updateById(id, updatedData); 
    if (success) {
        res.redirect('/items/' + id);
    } else {
        let err = new Error('Cannot find a Planet with id ' + id);
        err.status = 404;
        next(err);
    }
    
};

exports.delete = (req,res,next) => {
    let id = req.params.id;
    if(model.deleteByID(id))
        res.redirect('/items');
    else {
        let err = new Error('Cannot find Planet with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.search = (req, res, next) => {
    // Get the search term from the query string
    let searchTerm = req.query.search;
    console.log(req.query.search);
    let item = model.find(); 

    // Filter item by search term 
    let filteredItem = item.filter(it => 
        it.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Check if the filteredItem array is empty
    if (filteredItem.length === 0) {
        res.render('./item/no-results', { search: searchTerm });
    } else if (filteredItem.length === 1 && filteredItem[0].title.toLowerCase() === searchTerm.toLowerCase()) {
        res.render('./item/show', { item: filteredItem[0] });
    } else {
        // Show all matching items
        res.render('./item/index', { item: filteredItem });
    }
    
};