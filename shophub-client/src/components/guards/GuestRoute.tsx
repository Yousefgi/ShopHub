import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../features/auth/store/auth.store";

interface Props {
  children: React.ReactNode;
}

export default function GuestRoute({ children }: Props) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const user = useAuthStore((state) => state.user);

  if (!isAuthenticated) {
    return <>{children}</>;
  }

  if ((user?.role ?? "").toLowerCase() === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Navigate to="/" replace />;
}
