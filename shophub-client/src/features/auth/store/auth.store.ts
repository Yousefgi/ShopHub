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

  login: (token: string, user: User) => void;
  logout: () => void;
updateUser: (user: User) => void;
  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      user: null,

      isAuthenticated: false,

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
    }),
    {
      name: "auth-storage",
    }
  )
);