import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main(): void {
  // Read the current version from package.json
  fs.readFile('package.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read package.json', err);
      process.exit(1);
    }

    const packageJson = JSON.parse(data);
    const currentVersion = packageJson.version.split('.');

    // Prompt user for the type of change
    rl.question('Is this update a major(mj), minor(mi), or patch(p)? ', (type) => {
      let newVersion = '';
      switch (type.toLowerCase()) {
        case 'major':
        case 'mj':
          newVersion = `${parseInt(currentVersion[0]) + 1}.0.0`;
          break;
        case 'minor':
        case 'mi':
          newVersion = `${currentVersion[0]}.${parseInt(currentVersion[1]) + 1}.0`;
          break;
        case 'patch':
        case 'p':
          newVersion = `${currentVersion[0]}.${currentVersion[1]}.${parseInt(currentVersion[2]) + 1}`;
          break;
        default:
          console.log('Invalid input. Input must be: major, minor, or patch.');
          process.exit(1);
      }

      // Update package.json with new version
      packageJson.version = newVersion;
      fs.writeFile('package.json', JSON.stringify(packageJson, null, 2), 'utf8', (err) => {
        if (err) {
          console.error('Failed to write package.json', err);
          process.exit(1);
        }
        console.log(`Updated package.json version to ${newVersion}`);
        rl.close();
      });
    });
  });
}

main();
