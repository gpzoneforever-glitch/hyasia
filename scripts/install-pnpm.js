import { execSync } from 'child_process';
import process from 'process';

try {
  console.log('[v0] Installing dependencies with pnpm install...');
  execSync('pnpm install', {
    cwd: '/vercel/share/v0-project',
    stdio: 'inherit'
  });
  console.log('[v0] Dependencies installed successfully with pnpm');
} catch (error) {
  console.error('[v0] Failed to install dependencies:', error.message);
  process.exit(1);
}
