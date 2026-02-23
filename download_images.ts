import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  { url: 'https://i.ibb.co/8Q4nhHL/skill.png', name: 'skill.png' },
  { url: 'https://i.ibb.co/nq0Ksmgk/logo.png', name: 'logo_fallback.png' },
  { url: 'https://i.ibb.co/fGKj02CN/apostle.png', name: 'apostle.png' },
  { url: 'https://i.ibb.co/whxs4Mbc/footer.png', name: 'footer_bg.png' },
  { url: 'https://i.ibb.co/W4ZhyDnN/Warrior.png', name: 'Warrior.png' },
  { url: 'https://i.ibb.co/RpW88z5t/Warlord.png', name: 'Warlord.png' },
  { url: 'https://i.ibb.co/XZ0q51p7/Dreadnought.png', name: 'Dreadnought.png' },
  { url: 'https://i.ibb.co/0y0ZntHD/Gladiator.png', name: 'Gladiator.png' },
  { url: 'https://i.ibb.co/BVRW4fV6/Duelist.png', name: 'Duelist.png' },
  { url: 'https://i.ibb.co/6R1fRG36/Human-Knight.png', name: 'Human-Knight.png' },
  { url: 'https://i.ibb.co/k2rh3NxR/Paladin.png', name: 'Paladin.png' },
  { url: 'https://i.ibb.co/cS4Lg2FZ/Phoenix-Knight.png', name: 'Phoenix-Knight.png' },
  { url: 'https://i.ibb.co/0RKQnH2G/Dark-Avenger.png', name: 'Dark-Avenger.png' },
  { url: 'https://i.ibb.co/2796p1fw/Hell-Knight.png', name: 'Hell-Knight.png' },
  { url: 'https://i.ibb.co/rRwHh3gg/Rogue.png', name: 'Rogue.png' },
  { url: 'https://i.ibb.co/hx4sQY6Z/Treasure-Hunter.png', name: 'Treasure-Hunter.png' },
  { url: 'https://i.ibb.co/VcqWVQcv/Adventurer.png', name: 'Adventurer.png' },
  { url: 'https://i.ibb.co/G38V74RJ/Hawkeye.png', name: 'Hawkeye.png' },
  { url: 'https://i.ibb.co/XxqSGMfS/Sagittarius.png', name: 'Sagittarius.png' },
  { url: 'https://i.ibb.co/3YG77Zbg/Mage.png', name: 'Mage.png' },
  { url: 'https://i.ibb.co/BHVJqNY4/Wizard.png', name: 'Wizard.png' },
  { url: 'https://i.ibb.co/0jHfz2kq/Archmage.png', name: 'Archmage.png' },
  { url: 'https://i.ibb.co/B215cyym/Necromancer.png', name: 'Necromancer.png' },
  { url: 'https://i.ibb.co/7JsFRzC4/Soultaker.png', name: 'Soultaker.png' },
  { url: 'https://i.ibb.co/ZpRncp85/Warlock.png', name: 'Warlock.png' },
  { url: 'https://i.ibb.co/Xrf80VNs/Arcana-Lord.png', name: 'Arcana-Lord.png' },
  { url: 'https://i.ibb.co/SWrpSLp/Cleric.png', name: 'Cleric.png' },
  { url: 'https://i.ibb.co/spBb7J3k/Bishop.png', name: 'Bishop.png' },
  { url: 'https://i.ibb.co/xqdHBbm1/Cardinal.png', name: 'Cardinal.png' },
  { url: 'https://i.ibb.co/93V08SLc/Prophet.png', name: 'Prophet.png' },
  { url: 'https://i.ibb.co/rYHNMwr/Apostle.png', name: 'Apostle.png' },
];

const publicDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

images.forEach((img) => {
  const filePath = path.join(publicDir, img.name);
  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 500) {
    console.log(`Skipping ${img.name} (already exists and looks valid)`);
    return;
  }
  const download = (url: string, attempt = 1) => {
    https.get(url, options, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location!, attempt);
        return;
      }
      if (response.statusCode !== 200) {
        console.error(`Failed to download ${img.name}: ${response.statusCode}`);
        return;
      }
      const file = fs.createWriteStream(filePath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${img.name} (${fs.statSync(filePath).size} bytes)`);
      });
    }).on('error', (err) => {
      if (attempt < 3) {
        console.log(`Retrying ${img.name} (attempt ${attempt + 1})`);
        download(url, attempt + 1);
      } else {
        console.error(`Error downloading ${img.name}: ${err.message}`);
      }
    });
  };
  download(img.url);
});
