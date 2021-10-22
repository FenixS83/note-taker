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




router.post(`/notes`, async (req, res) => {
    const newNote = req.body;
    newNote.id = UUIDv4();
    const dataBase = await readDataBase();
    dataBase.push(newNote);
    writeDataBase(dataBase);
    res.json(dataBase);
});









router.delete(`/notes/:id`, async (req, res) => {
    const dataBase = await readDataBase();

    dataBase.splice(dataBase.findIndex(({ id }) => id == req.params.id), 1 );
    writeDataBase(dataBase);
    res.sendFile(`${req.params.id} deleted`);
});

export default router;