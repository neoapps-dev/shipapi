const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const directoryPath = path.join(process.cwd(), 'v1'); // Assuming 'v1' is the directory you want to list files from
    try {
        const files = await fs.promises.readdir(directoryPath);
        const fileNames = files.map(fileName => path.parse(fileName).name);
        res.status(200).json(fileNames);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
