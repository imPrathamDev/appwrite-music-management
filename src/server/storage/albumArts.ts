import { storage } from "../../../config";
import { storage as s } from "../server.appwrite";

const createAlbumArtsBucket = async () => {
  try {
    const MAX_FILE_SIZE = 30_000_000;
    const result = await s.createBucket(
      storage.albumArts,
      storage.albumArts,
      undefined,
      true,
      true,
      MAX_FILE_SIZE,
      [],
      undefined,
      false,
      true
    );
    console.log("SUCCESS: music storage bucket created successfully.");
  } catch (error) {
    console.log(
      "ERROR: Error on creating album art storage bucket, err ==> ",
      error
    );
  }
};

export default createAlbumArtsBucket;
