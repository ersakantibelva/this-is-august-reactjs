import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions/product/actionCreator";
import { LOADING_SETLOADING, LOADING_UNSETLOADING } from "../store/actions/product/actionType";

export default function LandingPage() {
  const dispatch = useDispatch();
  const { currentPage, totalPages, totalProduct, products } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch({
      type: LOADING_SETLOADING
    })
    dispatch(fetchProducts())
    .finally(() => {
      dispatch({
        type: LOADING_UNSETLOADING
      })
    })
  }, []);

  return (
    <>
      <div className="h-fit">
        <section className="container mx-auto bg-center bg-no-repeat bg-cover bg-landing">
          <div className="backdrop-brightness-100">
            <div className="container max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:h-screen 2xl:h-fit lg:items-center"></div>
          </div>
        </section>

        <div className="container mx-auto mt-4 mb-6">
          <h1 className="m-4 font-bold text-2x">OUR PRODUCTS</h1>

          <nav
            className="inline-flex my-2 -space-x-px rounded-md shadow-sm isolate"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>

          <div className="grid grid-cols-4 gap-6">
            {products.map((el, index) => {
              return (
                <div key={index}>
                <Link to={`/product/${el.slug}`}>
                  <img
                    className="w-full"
                    src={el.mainImg}
                  />
                  <p className="text-left">
                    {el.name}
                  </p>
                  <p className="font-semibold text-left">Rp{el.price.toLocaleString("id-ID")},00</p>
                </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
