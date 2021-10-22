// Dependencies
const express = require(`express`);
const path = require(`path`);
const api = require(`./routes/apiRoutes`);


// Setting port and express.js 
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(`/api`, api);

//Route for landing page
app.get(`/`, (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Route for notes page
app.get(`/notes`, (req, res) => {
res.sendFile(path.join(__dirname, 'public/notes.html'));
})

// Listening on PORT
app.listen(PORT, () =>
    console.log(`listening on port ${PORT}`)    
);

