import { useMutation } from "@tanstack/react-query";

import { authService } from "../services/auth.service";

import type {
  AuthResponse,
  RegisterRequest,
} from "../types/auth";

export const useRegister = () => {
  return useMutation<AuthResponse, Error, RegisterRequest>({
    mutationFn: authService.register,
  });
};