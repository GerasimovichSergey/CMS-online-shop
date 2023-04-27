export const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('loadend', () => {
      resolve(reader.result);
    });

    reader.addEventListener('error', (error) => {
      reject(error);
    });

    reader.readAsDataURL(file);
  })
};