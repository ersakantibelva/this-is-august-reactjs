import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import TableCategories from "../components/TableCategories";
import { useEffect } from "react";
import { fetchCategories } from "../stores/actions/category/actionCreator";

export default function CategoriesPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.category)

  function goToAddCategories() {
    navigate('/categories/add')
  }

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <>
    <div className="flex justify-between mb-2">
      <h1 className="font-bold text-2xl mb-4">Categories</h1>

      <button onClick={goToAddCategories} className="btn btn-success btn-sm">+ Add Category</button>
    </div>

      <TableCategories categories={categories} />
    </>
  );
}
