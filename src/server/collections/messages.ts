import { collections, database } from "../../../config";
import { db } from "../server.appwrite";

const createMessagesCollections = async () => {
  try {
    const messagesCollection = await db.createCollection(
      database,
      collections.messages,
      collections.messages,
      undefined,
      true,
      true
    );
    console.log("SUCCESS: messages collection created");
    const promises = await Promise.all([
      db
        .createStringAttribute(
          database,
          collections.messages,
          "content",
          4000,
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
          collections.messages,
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
      db
        .createStringAttribute(
          database,
          collections.messages,
          "teamId",
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
      "SUCCESS: messages collection attributes created, result => ",
      promises
    );
  } catch (error) {
    console.log("ERROR: Error on createMessagesCollections, err => ", error);
  }
};

export default createMessagesCollections;
