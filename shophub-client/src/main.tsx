import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import "./index.css";

import App from "./App";
import Spinner from "./components/ui/Spinner";
import { queryClient } from "./lib/query-client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>

      <Toaster position="top-right" richColors closeButton expand />
    </QueryClientProvider>
  </StrictMode>,
);
