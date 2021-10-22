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

app.post(`/api/notes`, (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const {title, text} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
        };

        const reviewString = JSON.stringify(newNote);

        fs.writeFile(`./db/${newNote.title}.json`,
        reviewString, (err) =>
        err
        ? console.error(err)
        : console.log(
            `Note for ${newNote.title} has been written to JSON file`
        ));

        const response = {
            status: `success`,
            body: newNote,
        };

        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json(`Error in posting note`);
    }
});





app.listen(PORT, () => 
    console.log(`listening on port ${PORT}`)
);

