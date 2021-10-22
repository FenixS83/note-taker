import express from `express`;
import fs from `fs/promises`;
import {v4 as UUIDv4} from `uuid`;


const routerAPI = express.Router();


/**
 * @async
 * @returns {Promise<object[]> }
 */
const readDataBase = async () => {
    let json;
    try {
        json = await fs.readFile(`db/db.json`, {encoding: `utf8` }, (err, data) => {
            err ? console.error(err) : null;
            return data;
        });
        json = JSON.parse(json);
    } catch (error) {
        console.error(`Retrieving DB failed`, error);
    }
    return json;
};

/**
 * @param {object} newDataBase
 */

const writeDataBase = (newDataBase) => {
    let dataBaseString = JSON.stringify(newDataBase, null, `   `);
    fs.writeFile(`db/db.json`, dataBaseString, (err) => {
        err ? console.error(err) : null;
    });
};




router.get(`/notes`, async (req, res) => {
    const data = await readDataBase();
    res.json(data);
});














@requires module: express - Router



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