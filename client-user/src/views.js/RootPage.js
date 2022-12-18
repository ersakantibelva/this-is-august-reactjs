import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom'

export default function RootPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen mx-auto max-w-screen">
        <Navbar />
        <div className="h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
