import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="flex h-screen max-w-screen">
        <Sidebar />

        <div className="flex flex-col w-full ml-40">
          {/* <Navbar /> */}

          <div className="container px-12 py-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
