const { execSync } = require('child_process');

try {
    console.log('Installing node-fetch...');
    execSync('npm install node-fetch', { stdio: 'inherit' });
    console.log('node-fetch installed successfully.');
} catch (error) {
    console.error('Error installing node-fetch:', error);
}
