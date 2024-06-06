const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const query = req.query.q;

    try {
        const response = await fetch('https://shipapi.vercel.app/api/pkgs');
        const packages = await response.json();

        // Search for the package
        const packageFound = packages.find(pkg => pkg.toLowerCase() === query.toLowerCase());

        if (packageFound) {
            res.status(200).json(packageFound);
        } else {
            res.status(404).json({ error: 'Package Not Found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
