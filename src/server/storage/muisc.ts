import { storage } from "../../../config";
import { storage as s } from "../server.appwrite";

const createMusicFilesBucket = async () => {
  try {
    const MAX_FILE_SIZE = 30_000_000;
    const result = await s.createBucket(
      storage.musics, // bucketId
      storage.musics, // name
      undefined, // permissions (optional)
      true, // fileSecurity (optional)
      true, // enabled (optional)
      MAX_FILE_SIZE, // maximumFileSize (optional)
      [], // allowedFileExtensions (optional)
      undefined, // compression (optional)
      false, // encryption (optional)
      true // antivirus (optional)
    );
    console.log("SUCCESS: music storage bucket created successfully.");
  } catch (error) {
    console.log("ERROR: Error on creating storage bucket, err ==> ", error);
  }
};

export default createMusicFilesBucket;
