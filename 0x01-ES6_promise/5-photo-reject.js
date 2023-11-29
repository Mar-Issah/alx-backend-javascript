export default function uploadPhoto(filename) {
  const errorMessage = `${filename} cannot be processed`;
  return Promise.reject(new Error(errorMessage));
}
