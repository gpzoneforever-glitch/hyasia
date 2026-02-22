import { execSync } from 'child_process';
import path from 'path';

try {
  console.log('Regenerating package-lock.json...');
  execSync('npm install', {
    cwd: path.resolve('/vercel/share/v0-project'),
    stdio: 'inherit'
  });
  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Error installing dependencies:', error.message);
  process.exit(1);
}
