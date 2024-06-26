const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const query = req.query.q;

    try {
        // Fetch package list
        const response = await fetch('https://shipapi.vercel.app/api/pkgs');
        const packages = await response.json();

        // Search for the package
        const foundPackages = packages.filter(pkg => pkg.toLowerCase().includes(query.toLowerCase()));

        if (foundPackages.length > 0) {
            res.status(200).json(foundPackages);
        } else {
            res.status(404).json({ error: 'Package Not Found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
