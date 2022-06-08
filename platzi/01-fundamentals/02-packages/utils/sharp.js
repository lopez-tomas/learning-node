import sharp from 'sharp';

sharp('original.png')
  .resize(80)
  .grayscale()
  .toFile('resized-grayscale.png');