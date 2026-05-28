export const bgWith = (overlay, webp, jpg) =>
  `${overlay}, image-set(url(${webp}) type('image/webp'), url(${jpg}) type('image/jpeg'))`;
