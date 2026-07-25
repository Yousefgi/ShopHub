import { RouterProvider } from "react-router-dom";
import Spinner from "./components/ui/Spinner";
import { useAuthStore } from "./features/auth/store/auth.store";
import { router } from "./app/router";

function App() {
  const hydrated = useAuthStore((state) => state.hydrated);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
