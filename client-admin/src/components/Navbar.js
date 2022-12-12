export default function Navbar() {
  return (
    <>
      <header aria-label="Site Header" className="border-b border-gray-100">
        <div className="mx-auto flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-end">
            <div className="flex items-center">
              <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                <span>
                  <a
                    href="/cart"
                    className="block border-b-4 border-transparent p-6 hover:border-gray-700"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <span className="sr-only">Cart</span>
                  </a>
                </span>
                <span>
                  <a
                    href="/account"
                    className="block border-b-4 border-transparent p-6 hover:border-gray-700"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="sr-only"> Account </span>
                  </a>
                </span>
                <span className="hidden sm:block">
                  <a
                    href="/search"
                    className="block border-b-4 border-transparent p-6 hover:border-gray-700"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span className="sr-only"> Search </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
