//require modules 
const express = require('express');
const morgan = require('morgan');
const itemRoutes = require('./routes/itemRoutes');
const methodOverride = require('method-override');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images'); 
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + '--' + file.originalname); // Use the current timestamp and original file extension
    }
});


//create app
const app = express();



//configure app
let port = 3001;
let host = 'localhost';
app.set('view engine', 'ejs');


//mount midelware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(multer({ storage: storage }).single('image')); // Use 'single' for single file upload


//set up routes
app.get('/', (req,res) => {
    res.render('index');
});

app.use('/items', itemRoutes);


app.use((req, res, next) =>{
    let err = new Error('The server cannot locate ' + req.url);
    err.status= 404;
    console.error("Error status: ", err.status);
    console.error("Error message: ", err.message);
    res.status(err.status || 500);
    res.render('error', {error: err});
    next(err);
    
});

app.use((err, req, res, next) => {
    console.log(err.stack)
    if (!err.status){
        err.status=500;
        err.message = "Internal Server Error";
    }
    res.status(err.status);
    res.render('error', {error: err})
});




//start the server
app.listen(port,host, () => {
    console.log('Server is running on port ', port);
});