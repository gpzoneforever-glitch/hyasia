import { execSync } from 'child_process';
import process from 'process';

try {
  console.log('[v0] Installing dependencies with npm install...');
  execSync('npm install', {
    cwd: '/vercel/share/v0-project',
    stdio: 'inherit'
  });
  console.log('[v0] Dependencies installed successfully');
} catch (error) {
  console.error('[v0] Failed to install dependencies:', error.message);
  process.exit(1);
}
