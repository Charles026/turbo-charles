import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  // 压缩 public 目录下的图片
  const publicFiles = await imagemin(['public/*.{png,jpg,jpeg}'], {
    destination: 'public',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  // 压缩 images 目录下的图片
  const imagesFiles = await imagemin(['images/*.{png,jpg,jpeg}'], {
    destination: 'images',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  console.log('Images optimized');
  [...publicFiles, ...imagesFiles].forEach(file => {
    console.log(`Optimized: ${path.basename(file.destinationPath)}`);
  });
})(); 