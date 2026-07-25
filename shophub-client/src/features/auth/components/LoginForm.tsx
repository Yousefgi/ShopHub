import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormField from "../../../components/ui/FormField";
import Input from "../../../components/ui/Input";
import PasswordInput from "../../../components/ui/PasswordInput";
import Button from "../../../components/ui/Button";
import { isAdmin } from "../../../utils/role";
import { useLogin } from "../hooks/useLogin";
import { useAuthStore } from "../store/auth.store";
import { loginSchema, type LoginFormData } from "../schemas/login.schema";

export default function LoginForm() {
  const { mutate, isPending, error } = useLogin();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    mutate(data, {
      onSuccess: (response) => {
        if (isAdmin(response.role)) {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      },
    });
  };

  if (isAuthenticated) {
    const user = useAuthStore.getState().user;

    if (isAdmin(user?.role)) {
      return <Navigate to="/admin/dashboard" replace />;
    }

    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full max-w-md">
      <h2 className="mb-2 text-center text-4xl font-bold text-slate-900">
        Welcome Back
      </h2>

      <p className="mb-10 text-center text-gray-500">
        Login to your ShopHub account
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <FormField label="Email">
          <Input
            className="h-14"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            error={errors.email?.message}
          />
        </FormField>

        <FormField label="Password">
          <PasswordInput
            className="h-14"
            placeholder="Enter your password"
            {...register("password")}
            error={errors.password?.message}
          />
        </FormField>

        {error && (
          <p className="text-center text-sm text-red-500">
            Invalid email or password
          </p>
        )}

        <Button
          type="submit"
          className="mt-2 h-14 w-full rounded-xl text-lg font-semibold"
          disabled={isPending}
        >
          {isPending ? "Signing in..." : "Login"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
