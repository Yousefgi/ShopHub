import { useMutation } from "@tanstack/react-query";

import { authService } from "../services/auth.service";
import { useAuthStore } from "../store/auth.store";

import type {
  AuthResponse,
  LoginRequest,
} from "../types/auth";

export const useLogin = () => {
  const login = useAuthStore((state) => state.login);

  return useMutation<AuthResponse, Error, LoginRequest>({
    mutationFn: authService.login,

    onSuccess: (data) => {
      login(data.token, {
        fullName: data.fullName,
        email: data.email,
        role: data.role,
      });
    },
  });
};