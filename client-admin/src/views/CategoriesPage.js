import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import TableCategories from "../components/TableCategories";
import { useEffect } from "react";
import { fetchCategories } from "../stores/actions/category/actionCreator";
import { swalError } from "../helpers/swal";
import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";

export default function CategoriesPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.category)

  function goToAddCategories() {
    navigate('/categories/add')
  }

  useEffect(() => {
    dispatch({
      type: LOADING_SETLOADER
    })
    dispatch(fetchCategories())
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
    <div className="flex justify-between mb-2">
      <h1 className="mb-4 text-2xl font-bold">Categories</h1>

      <button onClick={goToAddCategories} className="btn btn-success btn-sm">+ Add Category</button>
    </div>

      <TableCategories categories={categories} />
    </>
  );
}
