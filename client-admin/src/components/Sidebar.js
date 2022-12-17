import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  function handleLogOut(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  }
  return (
    <>
      <div className="fixed flex h-screen flex-col justify-between border-r bg-white min-w-min">
        <div className="px-4 py-6">
          <h1 className="text-xl font-bold">THIS IS AUGUST</h1>
          <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
            <NavLink
              to="/"
              className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="ml-3 text-sm font-medium"> Dashboard </span>
            </NavLink>

            <NavLink
              to="/products"
              className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="ml-3 text-sm font-medium"> Product List </span>
            </NavLink>

            <NavLink
              to="/categories"
              className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="ml-3 text-sm font-medium"> Categories </span>
            </NavLink>

            <NavLink
              to="/register"
              className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="ml-3 text-sm font-medium"> Register Admin </span>
            </NavLink>

            <a
              onClick={handleLogOut}
              className="cursor-pointer flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="ml-3 text-sm font-medium"> Sign Out </span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
