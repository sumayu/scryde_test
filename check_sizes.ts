import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const files = fs.readdirSync(publicDir);

files.forEach(f => {
  const stats = fs.statSync(path.join(publicDir, f));
  console.log(`${f}: ${stats.size} bytes`);
});
