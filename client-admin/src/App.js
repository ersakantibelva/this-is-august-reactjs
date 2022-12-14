import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
    <div className="max-w-screen" >
      <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;
