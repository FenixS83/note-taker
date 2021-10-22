const express = require(`express`);
const htmlRoutes = require(`./routes/htmlRoutes`);
const fs = require(`fs`);

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(`/api`, apiRoutes);
app.use(`/`, htmlRoutes);

app.get(`/`, (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get(`/api/notes`, (req, res) => {
    res.json(`${req.method} request received to get notes`);
    console.info(`${req.method} request received to get notes`);
});







app.listen(PORT, () => console.log(`listening on port ${PORT}`));

