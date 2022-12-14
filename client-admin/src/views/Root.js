import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="flex h-screen max-w-screen">
        <Sidebar />

        <div className="w-full">
          <Navbar />

          <div className="px-12 my-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
