import { Client, Account, Databases } from "appwrite";

export const client = new Client();

const { NEXT_PUBLIC_APPWRITE_ENDPOINT, NEXT_PUBLIC_APPWRITE_PROJECT_ID } =
  process.env;

if (
  NEXT_PUBLIC_APPWRITE_ENDPOINT === undefined ||
  NEXT_PUBLIC_APPWRITE_PROJECT_ID === undefined
)
  throw new Error("Appwrite ENV variables not exist.");

client
  .setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(NEXT_PUBLIC_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const db = new Databases(client);
export { ID, Query } from "appwrite";
