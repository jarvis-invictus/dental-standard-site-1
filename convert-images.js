const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public/assets/images');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(png|jpg|jpeg)$/i.test(fullPath)) {
      const parsed = path.parse(fullPath);
      const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
      await sharp(fullPath)
        .webp({ quality: 95 })
        .toFile(webpPath);
      fs.unlinkSync(fullPath); // Delete old file
      console.log(`Converted ${file} to WebP`);
    }
  }
}

processDirectory(publicDir).catch(console.error);
