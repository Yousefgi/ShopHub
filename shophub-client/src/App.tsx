import { RouterProvider } from "react-router-dom";

import { router } from "./app/router";

function App() {
  console.log(import.meta.env.VITE_API_URL);
  return <RouterProvider router={router} />;
}

export default App;
