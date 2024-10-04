import { collections, database } from "../../../config";
import { db } from "../server.appwrite";

const createMusicCollection = async () => {
  try {
    const waiting = await db.createCollection(
      database,
      collections.musics,
      collections.musics,
      undefined,
      true,
      true
    );
    console.log("SUCCESS: music collection created successfully.");
  } catch (error) {
    console.log("ERROR: Error on creating music collection, error => ", error);
  }
};
