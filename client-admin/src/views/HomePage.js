import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { swalError } from "../helpers/swal";
import { fetchCategories } from "../stores/actions/category/actionCreator";
import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";
import { fetchProducts } from "../stores/actions/product/actionCreator";

export default function HomePage() {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.product)
  const { categories } = useSelector((state) => state.category)

  useEffect(() => {
    dispatch({
      type: LOADING_SETLOADER
    })
    dispatch(fetchProducts())
    .then(() => {
      dispatch(fetchCategories())
    })
    .catch((err) => {
      swalError(err.message)
    })
    .finally(() => {
      dispatch({
        type: LOADING_UNSETLOADER
      })
    })
  }, [])
  
  return (
    <>
      <div className="flex flex-col items-start">
        <h1 className="mb-10 text-3xl font-bold">Dashboard</h1>

        <div className="shadow stats">
          <div className="stat">
            <div className="stat-title">Total Products</div>
            <div className="stat-value text-primary">{products.length}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Total Categories</div>
            <div className="stat-value text-secondary">{categories.length}</div>
          </div>
        </div>
      </div>
    </>
  );
}
