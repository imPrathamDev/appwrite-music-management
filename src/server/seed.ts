import createMessagesCollections from "./collections/messages";
import createMusicCollection from "./collections/musics";
import createSharedLinksCollection from "./collections/sharedLinks";

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
  await Promise.all([
    createMusicCollection(),
    createMessagesCollections(),
    createSharedLinksCollection(),
  ]);
  console.log("Creating Appwrite Storage Buckets Ended.");
};

/*
 * I like to run this function using command line and that's why I created script to run this function.
 * npm run seed:appwrite
 */

const executeInit = async () => {
  console.log("Please wait...");
  await Promise.all([
    initAppwriteDatabaseSchemas(),
    initAppwriteStorageBuckets(),
  ]);
  console.log("All Done.");
};
