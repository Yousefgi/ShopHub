import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  fullName: string;
  email: string;
  role: string;
}

interface AuthStore {
  token: string | null;
  user: User | null;

  isAuthenticated: boolean;
  hydrated: boolean;

  login: (token: string, user: User) => void;
  logout: () => void;
  updateUser: (user: User) => void;

  setHydrated: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      user: null,

      isAuthenticated: false,

      hydrated: false,


      login: (token, user) =>
        set({
          token,
          user,
          isAuthenticated: true,
        }),


      updateUser: (user) =>
        set({
          user,
        }),


      logout: () =>
        set({
          token: null,
          user: null,
          isAuthenticated: false,
        }),


      setHydrated: () =>
        set({
          hydrated: true,
        }),
    }),


    {
      name: "auth-storage",

      onRehydrateStorage: () => (state) => {

        if (state?.token && state?.user) {

          state.isAuthenticated = true;

        } else {

          state!.isAuthenticated = false;

        }


        state?.setHydrated();
      },
    }
  )
);