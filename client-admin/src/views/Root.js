import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="flex h-screen max-w-screen">
        <Sidebar />

        <div className="flex flex-col w-full ml-40">
          <div className="container px-12 py-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
