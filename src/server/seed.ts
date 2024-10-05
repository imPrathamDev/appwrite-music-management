import { database } from "../../config";
import createMessagesCollections from "./collections/messages";
import createMusicCollection from "./collections/musics";
import createSharedLinksCollection from "./collections/sharedLinks";
import { db } from "./server.appwrite";
import createAlbumArtsBucket from "./storage/albumArts";
import createMusicFilesBucket from "./storage/music";

const initAppwriteDatabaseSchemas = async () => {
  console.log("Creating Appwrite Database Schemas Stared...");
  await Promise.all([
    createMusicCollection(),
    createMessagesCollections(),
    createSharedLinksCollection(),
  ]);
  console.log("Creating Appwrite Database Schemas Ended.");
};

const initAppwriteStorageBuckets = async () => {
  console.log("Creating Appwrite Storage Buckets Stared...");
  await Promise.all([createAlbumArtsBucket(), createMusicFilesBucket()]);
  console.log("Creating Appwrite Storage Buckets Ended.");
};

const createDatabase = async () => {
  try {
    await db.create(database, database, true);
    return true;
  } catch (error) {
    console.log("ERROR: Error on creating on database, err => ", error);
    return undefined;
  }
};

/*
 * I like to run this function using command line and that's why I created script to run this function.
 * npm run seed:appwrite
 */

const executeInit = async () => {
  console.log("Please wait...");
  const database = await createDatabase();
  if (database !== undefined) {
    await Promise.all([
      initAppwriteDatabaseSchemas(),
      initAppwriteStorageBuckets(),
    ]);
  }
  console.log("All Done.");
};

executeInit();
