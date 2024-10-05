import { Models } from "appwrite";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface UserPref {}

interface AuthStore {
  user: Models.User<UserPref> | null;
}

const useAuthSore = create<AuthStore>()(
  persist(
    immer((set, get) => ({
      user: null,
    })),
    {
      name: "user-auth-storage",
    }
  )
);

export default useAuthSore;
