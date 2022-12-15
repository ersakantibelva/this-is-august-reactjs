import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom'

export default function RootPage() {
  return (
    <>
      <div className="mx-auto flex flex-col w-screen h-screen bg-white">
        <Navbar />
        <div className="h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
