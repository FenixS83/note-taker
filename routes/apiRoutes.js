const express = require(`express`);
const fs = require(`fs`);
const util = require(`util`)


@requires module: express - Router

const routerAPI = express.Router();


@requires module: local - uuid

const uuid = require(`../helper/uuid`);
const readFromFile = util.



const path = require(`path`);

router.get(`/`, (req, res) => {
   
})

router.post(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/notes.html`));
})

module.exports = router;