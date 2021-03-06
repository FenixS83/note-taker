// Dependencies
const fs = require(`fs`);
const util = require(`util`);

//fs read file
const readFromFile = util.promisify(fs.readFile);

//fs write file
const writeToFile = (destination, content) =>
fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
err ? console.error(err) : console.info(`\nData written to ${destination}`)
);

// Read and Append function
const readAndAppend = (content, file) => {
    fs.readFile(file, `utf8`, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    })
}

// Delete note request
const deleteNote = (id, file) => {
    fs.readFile(file, `utf8`, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            for (let i=0; i < parsedData.length; i++) {
                if (parsedData[i].id == id) {
                    parsedData.splice(i, 1);
                }
            }
            writeToFile(file, parsedData);
        }
    })
}

// Export function
module.exports = {readFromFile, writeToFile, readAndAppend, deleteNote};