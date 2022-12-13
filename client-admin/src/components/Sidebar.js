import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="flex h-screen flex-col justify-between border-r bg-white min-w-min">
        <div className="px-4 py-6">
          <span className="block h-10 w-32 rounded-lg bg-gray-200" />
          <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
            <NavLink to="/products" className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
              <span className="ml-3 text-sm font-medium"> Product List </span>
            </NavLink>

            <NavLink to="/categories" className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-sm font-medium"> Categories </span>
            </NavLink>

            <NavLink to="/register" className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-sm font-medium"> Register Admin </span>
            </NavLink>

            <a className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-sm font-medium"> Sign Out </span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
