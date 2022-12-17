import { useNavigate } from "react-router-dom";
import TableProducts from "../components/TableProducts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../stores/actions/product/actionCreator";
import { swalError } from "../helpers/swal";
import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";

export default function ProductsPage() {
  const navigate = useNavigate()
  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch({
      type: LOADING_SETLOADER
    })

    dispatch(fetchProducts())
    .catch((err) => {
      swalError(err.message)
    })
    .finally(() => {
      dispatch({
        type: LOADING_UNSETLOADER
      })
    })
  }, [])

  function goToAddProducts() {
    navigate('/products/add')
  }

  return (
    <>
      <div className="flex justify-between mb-2">
        <h1 className="mb-4 text-2xl font-bold">Products</h1>
        <button onClick={goToAddProducts} className="btn btn-success btn-sm">+ Add Product</button>
      </div>

      <TableProducts products={products} />
    </>
  );
}
