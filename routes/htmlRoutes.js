const { dirname } = require("path");
const path = require(`path`);
const router = require(`express`).Router();

router.get(`/`, (req, res) => {
    res.sendFile(path.join(--dirname, `../public/index.html`));
})

router.get(`/`, (req, res) => {
    res.sendFile(path.join(--dirname, `../public/index.html`));
})