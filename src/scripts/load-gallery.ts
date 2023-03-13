import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  pswpModule: () => import('photoswipe'),
});

lightbox.addFilter('placeholderSrc', (placeholderSrc, content) => {
  if (placeholderSrc === false) {
    return false;
  }

  const image = new Image(content.width, content.height);
  image.src = placeholderSrc;

  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', content.width.toString());
  canvas.setAttribute('height', content.height.toString());
  const ctx = canvas.getContext('2d');

  if (ctx !== null) {
    ctx.filter = 'blur(8px)';
    ctx?.drawImage(image, 0, 0, content.width, content.height);
  }
  return canvas.toDataURL();
});

lightbox.init();
