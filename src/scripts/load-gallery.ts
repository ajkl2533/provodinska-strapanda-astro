import PhotoSwipeLightbox from 'photoswipe/lightbox';
import left from '../assets/icons/left.svg?raw';
import right from '../assets/icons/right.svg?raw';
import close from '../assets/icons/close.svg?raw';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  pswpModule: () => import('photoswipe'),
  arrowPrevSVG: left,
  arrowNextSVG: right,
  closeSVG: close,
  zoom: false,
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
