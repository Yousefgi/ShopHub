import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../features/auth/store/auth.store";

interface Props {
  children: React.ReactNode;
}

export default function AdminRoute({ children }: Props) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const user = useAuthStore((state) => state.user);

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if ((user.role ?? "").toLowerCase() !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
