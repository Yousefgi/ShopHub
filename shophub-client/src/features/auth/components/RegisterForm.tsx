import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { useAuthStore } from "../store/auth.store";
import {
  registerSchema,
  type RegisterFormData,
} from "../schemas/register.schema";

import { useRegister } from "../hooks/useRegister";

export default function RegisterForm() {
  const navigate = useNavigate();

  const { mutate, isPending } = useRegister();
  const login = useAuthStore((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    mutate(data, {
      onSuccess: (response) => {
        login(response.token, {
          fullName: response.fullName,
          email: response.email,
          role: response.role,
        });

        navigate("/");
      },
    });
  };

  return (
    <div className="w-full max-w-lg">
      <h2 className="text-4xl font-bold text-slate-900">Create Account</h2>

      <p className="mt-3 mb-10 text-gray-500">
        Join ShopHub and start shopping today.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Input
            placeholder="Full Name"
            className="h-14"
            {...register("fullName")}
          />

          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <Input placeholder="Email" className="h-14" {...register("email")} />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Password"
            className="h-14"
            {...register("password")}
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="h-14 w-full rounded-xl text-lg"
          disabled={isPending}
        >
          {isPending ? "Creating..." : "Create Account"}
        </Button>
      </form>

      <div className="mt-8 text-center text-gray-500">
        Already have an account?
        <Link
          to="/login"
          className="ml-2 font-semibold text-blue-600 hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
