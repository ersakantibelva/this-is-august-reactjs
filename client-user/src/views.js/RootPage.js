import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from "../components/Loader";

export default function RootPage() {
  const { loading } = useSelector((state) => state)

  return (
    <>
    {
      loading &&
      <Loader />
    }
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
