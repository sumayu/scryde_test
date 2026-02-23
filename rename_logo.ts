import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const files = fs.readdirSync(publicDir);
const logoFile = files.find(f => f.startsWith('Лого'));

if (logoFile) {
  fs.renameSync(path.join(publicDir, logoFile), path.join(publicDir, 'logo_with_text.png'));
  console.log(`Renamed ${logoFile} to logo_with_text.png`);
} else {
  console.log('Logo file not found');
}
