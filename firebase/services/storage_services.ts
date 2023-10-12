import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export async function uploadFile(file: File, id: string) {
  const storage = getStorage();
  const storageRef = ref(storage, id);

  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);

  return url;
}