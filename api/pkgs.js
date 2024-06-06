const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const directoryPath = path.join(process.cwd(), 'v1');
    try {
        const files = await fs.promises.readdir(directoryPath);
        // Filter out "index" file
        const filteredFiles = files.filter(fileName => fileName.toLowerCase() !== 'index.html');
        const fileNames = filteredFiles.map(fileName => path.parse(fileName).name);
        res.status(200).json(fileNames);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
