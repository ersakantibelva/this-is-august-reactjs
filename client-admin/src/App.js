import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
import router from "./router";

function App() {
  const { loading } = useSelector((state) => state.loading);
  return (
    <>
      <div className="max-w-screen">
        {loading && <Loader />}
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
