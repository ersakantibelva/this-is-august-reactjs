export default function Sidebar() {
  return (
    <>
      <div className="flex h-screen flex-col justify-between border-r bg-white w-1/6">
        <div className="px-4 py-6">
          <span className="block h-10 w-32 rounded-lg bg-gray-200" />
          <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
            <a className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
              <span className="ml-3 text-sm font-medium"> Product List </span>
            </a>

            <a className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-sm font-medium"> Categories </span>
            </a>

            <a className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-sm font-medium"> Register Admin </span>
            </a>

            <a className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-sm font-medium"> Sign Out </span>
            </a>
          </nav>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a className="flex shrink-0 items-center bg-white p-4 hover:bg-gray-50">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="ml-1.5">
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>
                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
