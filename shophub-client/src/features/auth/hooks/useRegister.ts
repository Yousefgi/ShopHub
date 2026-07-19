import { useMutation } from "@tanstack/react-query";

import { authService } from "../services/auth.service";
import { useAuthStore } from "../store/auth.store";

import type {
  AuthResponse,
  RegisterRequest,
} from "../types/auth";

export const useRegister = () => {
  const login = useAuthStore((state) => state.login);

  return useMutation<AuthResponse, Error, RegisterRequest>({
    mutationFn: authService.register,

    onSuccess: (data) => {
      login(data.token, {
        fullName: data.fullName,
        email: data.email,
        role: data.role,
      });
    },
  });
};