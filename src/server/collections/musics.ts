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

    const allPromises = await Promise.allSettled([
      db
        .createStringAttribute(
          database,
          collections.musics,
          "fileName",
          255,
          true,
          undefined,
          false,
          undefined
        )
        .then((res) => {
          console.log("SUCCESS: ", res.key + " attribute created");
        })
        .catch((err) => {
          console.log("ERROR: Error on creating attribute, err => ", err);
        }),
      db
        .createStringAttribute(
          database,
          collections.musics,
          "note",
          8000,
          false,
          undefined,
          false,
          undefined
        )
        .then((res) => {
          console.log("SUCCESS: ", res.key + " attribute created");
        })
        .catch((err) => {
          console.log("ERROR: Error on creating attribute, err => ", err);
        }),
      db
        .createUrlAttribute(
          database,
          collections.musics,
          "fileUrl",
          true,
          undefined,
          false
        )
        .then((res) => {
          console.log("SUCCESS: ", res.key + " attribute created");
        })
        .catch((err) => {
          console.log("ERROR: Error on creating attribute, err => ", err);
        }),
      db
        .createStringAttribute(
          database,
          collections.musics,
          "userId",
          65,
          true,
          undefined,
          false,
          undefined
        )
        .then((res) => {
          console.log("SUCCESS: ", res.key + " attribute created");
        })
        .catch((err) => {
          console.log("ERROR: Error on creating attribute, err => ", err);
        }),
    ]);
    console.log(
      "SUCCESS: music collection created successfully. result => ",
      allPromises
    );
  } catch (error) {
    console.log("ERROR: Error on creating music collection, error => ", error);
  }
};

export default createMusicCollection;
