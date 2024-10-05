import { Client, Users, Databases, Storage } from "node-appwrite";

export const client = new Client();

const { NEXT_PUBLIC_ENDPOINT, NEXT_PUBLIC_PROJECT_ID, APPWRITE_API_KEY } =
  process.env;

if (
  NEXT_PUBLIC_ENDPOINT === undefined ||
  NEXT_PUBLIC_PROJECT_ID === undefined ||
  APPWRITE_API_KEY === undefined
)
  throw new Error("Appwrite ENV variables not exist.");

client
  .setEndpoint(NEXT_PUBLIC_ENDPOINT)
  .setProject(NEXT_PUBLIC_PROJECT_ID)
  .setKey(APPWRITE_API_KEY);

export const users = new Users(client);
export const db = new Databases(client);
export const storage = new Storage(client);
