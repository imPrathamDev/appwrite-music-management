import { collections, database } from "../../../config";
import { db } from "../server.appwrite";

const createSharedLinksCollection = async () => {
  try {
    const sharedLinkCollection = await db.createCollection(
      database,
      collections.sharedLinks,
      collections.sharedLinks,
      undefined,
      true,
      true
    );
    console.log("SUCCESS: sharedLinks collection created successfully.");
    const promises = await Promise.all([
      db
        .createStringAttribute(
          database,
          collections.sharedLinks,
          "userId",
          65,
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
          collections.sharedLinks,
          "musicId",
          65,
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
        .createDatetimeAttribute(
          database,
          collections.sharedLinks,
          "expiry",
          false,
          undefined,
          false
        )
        .then((res) => {
          console.log("SUCCESS: ", res.key + " attribute created");
        })
        .catch((err) => {
          console.log("ERROR: Error on creating attribute, err => ", err);
        }),
    ]);
    console.log(
      "SUCCESS: sharedLinks collection attributes created successfully. result => ",
      promises
    );
  } catch (error) {
    console.log("ERROR: Error on createSharedLinksCollection, err => ", error);
  }
};

export default createSharedLinksCollection;
