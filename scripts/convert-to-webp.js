const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDirs = ['images', 'public'];
const exts = ['.png', '.jpg', '.jpeg'];

function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath));
    } else if (exts.includes(path.extname(file).toLowerCase())) {
      results.push(filePath);
    }
  });
  return results;
}

async function convertToWebp(filePath) {
  const outPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  if (fs.existsSync(outPath)) return; // 跳过已存在的 webp
  await sharp(filePath)
    .webp({ quality: 80 })
    .toFile(outPath);
  console.log(`Converted: ${filePath} -> ${outPath}`);
}

(async () => {
  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) continue;
    const images = getAllImages(dir);
    for (const img of images) {
      try {
        await convertToWebp(img);
      } catch (e) {
        console.error(`Failed to convert ${img}:`, e.message);
      }
    }
  }
  console.log('All images converted to WebP!');
})(); 