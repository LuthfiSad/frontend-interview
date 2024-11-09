import { RouterProvider } from "react-router-dom";
import { router } from "../core/utils/router.tsx";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
