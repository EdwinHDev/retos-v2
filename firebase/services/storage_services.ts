import { getStorage, ref } from "firebase/storage";

export async function uploadFile() {
  // Create a root reference
  const storage = getStorage();

  // Create a reference to 'mountains.jpg'
  const mountainsRef = ref(storage, 'mountains.jpg');

  // Create a reference to 'images/mountains.jpg'
  const mountainImagesRef = ref(storage, 'images/mountains.jpg');

  // While the file names are the same, the references point to different files
  mountainsRef.name === mountainImagesRef.name;           // true
  mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 
}